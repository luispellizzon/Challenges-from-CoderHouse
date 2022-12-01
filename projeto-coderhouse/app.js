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

    const Note = function(args){
        const {id, title, text, color} = args;
        this.id = id;
        this.title = title;
        this.text = text;
        this.color = color;
    }

    const state = {
        notes: Storage.getStorage(),
        currentNote: null,
    }

    return {
        newNote(notesDetails){
          return new Note(notesDetails)
        }
    }
})();

/* -- App --*/
const App = ((NotesCtrl, UICtrl, Storage)=>{

    const UISelectors = UICtrl.getSelectors();

    const state = {
        noteColor: ''
    }
    
    const loadEvents = () =>{
        
        document.querySelectorAll(UISelectors.colors)
        .forEach(colorBtn=> colorBtn.addEventListener('click', getColor))
        


        document
        .getElementById(UISelectors.addNewNote)
        .addEventListener('click', submitNote)
        

    }

    const getColor = (e) => {
        const colorSelectedByUser = e.target.dataset.color
        state.noteColor = colorSelectedByUser
    }
    
    const submitNote = () =>{
        const newNote = NotesCtrl.newNote({
            id: 1,
            title: "",
            text: "",
            color: state.noteColor,
        })

        UICtrl.addNote(newNote);
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