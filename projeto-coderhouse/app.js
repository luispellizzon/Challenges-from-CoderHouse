/* -- Storage --*/
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
    const UISelectors = {
        noteContainer: 'sticky-container',
        addNewNote: 'add-note',
        editNote : '.edit-card',
        noteText: '.notes-paragraph',
        newNote: 'sticky-notes-card',
        colors: '.sticky-color'
    }

    return {
        addCardtoUi(note){
            console.log(note);
            
        },

        getSelectors(){
            return UISelectors;
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
          
            const noteID = 1;
            newItem = new Note(noteID, noteTitle, noteText)
            return newItem;
        }
    }
})();

/* -- App --*/
const App = ((NotesCtrl, UICtrl, Storage)=>{

    const UISelectors = UICtrl.getSelectors();
    
    const loadEvents = () =>{
        const colorsBtns = document.querySelectorAll(UISelectors.colors)
        colorsBtns.forEach(colorBtn=> colorBtn.addEventListener('click', getColor))

        document.getElementById()

    }

    const getColor = (e) => {
        const colorSelectedByUser = e.target.dataset.color
        return colorSelected;
    }

    const addNote = () =>{

    }

    return {
        init(){
            console.log("App is running")
            Storage.getStorage();

            loadEvents();
        },
        
    }
})(NotesCtrl, UICtrl, Storage);


App.init();