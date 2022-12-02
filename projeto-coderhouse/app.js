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
        notesContainer: 'notes-container',
        addNewNoteBtn: 'add-note',
        editNoteBtn : '.edit-card',
        // noteText: '.notes-paragraph',
        notesDiv: 'sticky-notes-card',
        colors: '.sticky-color'
    }

    return {
        animate(event){
            let target;
            if(event.target.classList.contains('add-note')){
                target = event.target
                target.classList.add('animate')
            } else {
                target = event.target.parentElement
                target.classList.add('animate')
            }

            setTimeout(() =>{
                target.classList.remove('animate')
            }, 1000)
        },
        addNewNote(note){
            const {id, title, text, color} = note;

            const container = document.getElementById(UISelectors.notesContainer)
            const div = document.createElement('div');
            div.classList.add(UISelectors.notesDiv)
            div.id = id;
            div.style.backgroundColor = color;

            div.innerHTML = `
                <div class="notes-title"> 
                    <textarea id="note-title">${note.title}</textarea>
                </div>
                <div class="notes-paragraph">
                  <textarea id="note-text">${text}</textarea>                  
                </div>
                <button class="edit-card">
                  <i class="fa-solid fa-pen"></i>
                </button>
            `
            
            container.prepend(div)
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
        .getElementById(UISelectors.addNewNoteBtn)
        .addEventListener('click', submitNote)
        

    }

    const getColor = (e) => {
        const colorSelectedByUser = e.target.dataset.color
        state.noteColor = colorSelectedByUser
    }
    
    const submitNote = (e) =>{
        const newNote = NotesCtrl.newNote({
            id: 1,
            title: "Note title",
            text: "New Note..",
            color: state.noteColor,
        })
        UICtrl.animate(e);
        UICtrl.addNewNote(newNote);
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