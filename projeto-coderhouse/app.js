/* -- Local Storage --*/
const Storage = (() =>{

    const state = {
        items:[]
    }

    return{
        getStorage(){
            return state.items;
        },

        storeItem(note){
            const {items} = state;
            items.push(note)
            console.log(items)
            return items;
        }
    }
})();

/* -- UI --*/
const UICtrl = (()=>{
    return {
        addCardtoUi(note){
            console.log(note);
            console.log("Item added to ui")
        }
    }
})();

/* -- New Notes --*/
const NotesCtrl = (() =>{

    const Note = function(id, title, text){
        this.id = id;
        this.title = title;
        this.text = text;
    }

    const state = {
        notes: Storage.getStorage(),
        currentNote: null,
    }

    return {
        newNote(){
            const noteTitle = prompt("Add a new title to your note reminder");
            const noteText = prompt("Note reminder:");
            const noteID = 1;
            newItem = new Note(noteID, noteTitle, noteText)
            return newItem;
        }
    }
})();

/* -- App --*/
const App = ((NotesCtrl, UICtrl, Storage)=>{
    return {
        init(){
            console.log("App is running")
            Storage.getStorage();
        },

        itemAdd(){
            const newNote = NotesCtrl.newNote();
            UICtrl.addCardtoUi(newNote)
            Storage.storeItem(newNote);
        }
    }
})(NotesCtrl, UICtrl, Storage)

App.init();
App.itemAdd();
App.itemAdd();

