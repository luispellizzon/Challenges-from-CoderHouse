/* -- Storage --*/
const Storage = (() =>{

    return{
        getStorage(){
           const notes = JSON.parse(localStorage.getItem('notes')) ?? []
           return notes
        },

        storeNote(note, notesArray){
            notesArray.push(note)
            localStorage.setItem('notes', JSON.stringify(notesArray))
            return notesArray
        },
        setNotes(notes){
            localStorage.setItem('notes', JSON.stringify(notes))
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
        notesDiv: '.sticky-notes-card',
        colors: '.sticky-color',
        selected: 'selected'
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
         populateNotesList(notes){
            let htmlList = "";
            
            notes.reverse().forEach((note) => {
                const {id, title, text, color} = note;
            htmlList +=  `
                <div class="sticky-notes-card" id="${id}" style="background-color: ${color}">
                    <div class="notes-title"> 
                        <textarea id="note-title" placeholder='${title}'></textarea>
                    </div>
                    <div class="notes-paragraph">
                    <textarea id="note-text" placeholder='${text}'></textarea>                  
                    </div>
                    <button class="edit-card">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
        `
      });
            document.getElementById(UISelectors.notesContainer).innerHTML = htmlList
         }
        ,
        selectColor(event,colorSelected,{noteColor}){
            if(noteColor != colorSelected){
                const prev = document.querySelector(`[data-color='${noteColor}']`)
                if(prev?.classList.contains('selected')){
                    prev.classList.remove('selected')
                }
                event.target.classList.add('selected')
            }
            
        },
        addNewNote(note){
            const {id, title, text, color} = note;
            if(color == ''){
                Toastify({
                    text: "❗Please, select a color❗",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: false,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "#333",
                      color: '#fff',
                      borderRadius: '20px'
                      
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                return;
            }
            const container = document.getElementById(UISelectors.notesContainer)
            const div = document.createElement('div');
            div.classList.add('sticky-notes-card')
            div.id = id;
            div.style.backgroundColor = color;
            div.innerHTML = `
                <div class="notes-title"> 
                    <textarea id="note-title" placeholder='${title}'></textarea>
                </div>
                <div class="notes-paragraph">
                  <textarea id="note-text" placeholder='${text}'></textarea>                  
                </div>
                <button class="edit-card">
                  <i class="fa-solid fa-pen"></i>
                </button>
            `
            
            container.prepend(div)
            return note;
        },

        getSelectors(){
            return UISelectors;
        },

        resetColor(color){
            const colorSelected = document.querySelector(`[data-color='${color}']`)
            colorSelected?.classList.remove('selected')
        },
        selectedNote(noteDiv){
            
            if(!noteDiv.classList.contains(UISelectors.selected)){
                noteDiv.classList.add(UISelectors.selected)
            }
            
        },
        
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
        },

        updateState(newState){
            state.notes = newState;
        }, 
        getNotes(){
            
            return state.notes;
        },
        getState(){
            return state
        },
        editCurrent(editNote){
            state.currentNote = editNote
            console.log(state.currentNote)
            const currentId = parseInt(editNote.id)
            const found = state.notes.find(note => note.id === currentId)
            if(state.currentNote.title !== ""){
                found.title = state.currentNote.title
            }
            if(state.currentNote.text !== ""){
                found.text = state.currentNote.text
            }
          const noteIndex = state.notes.map(note => note.id).indexOf(currentId)
          state.notes.splice(noteIndex, 1, found)
          
          return state.notes
        }
    }
})();

/* -- App --*/
const App = ((NotesCtrl, UICtrl, Storage)=>{

    const UISelectors = UICtrl.getSelectors();

    const state = {
        noteColor: '',
        noteSelected:{
            id:"",
            title: "",
            text: "",
        }
    }
    
    const loadEvents = () =>{
        

        document.querySelectorAll(UISelectors.colors)
        .forEach(colorBtn=> colorBtn.addEventListener('click', getColor))

        document
        .getElementById(UISelectors.addNewNoteBtn)
        .addEventListener('click', submitNote)

        document
        .querySelectorAll(UISelectors.notesDiv).forEach(note => note.addEventListener('click', editNote))
       
      
    }

    const getColor = (e) => {
        const colorSelectedByUser = e.target.dataset.color
        UICtrl.selectColor(e, colorSelectedByUser, state)
        state.noteColor = colorSelectedByUser
    }
    
    const submitNote = (e) =>{
        let noteId = Math.floor(Math.random() * Date.now()); 
        const newNote = NotesCtrl.newNote({
            id: noteId,
            title: "Note title..",
            text: "New Note..",
            color: state.noteColor,
        })
        UICtrl.animate(e);
        const noteToBeStored = UICtrl.addNewNote(newNote);
        const newState = Storage.storeNote(newNote, NotesCtrl.getNotes())
        NotesCtrl.updateState(newState)
        NotesCtrl.getNotes()
        UICtrl.resetColor(state.noteColor)
        document.querySelector(UISelectors.notesDiv).addEventListener('click', editNote)
        state.noteColor = '';
    }
    
    const editNote = (e) =>{
        const {noteSelected} = state;
        noteSelected.id = e.currentTarget.id
        

        document.getElementById('note-title').addEventListener('keyup', (e)=>{
            noteSelected.title = e.target.value
        });
        document.getElementById('note-text').addEventListener('keyup', (e)=>{
            noteSelected.text = e.target.value
        });
        
        if(e.target.classList.contains('edit-card') || e.target.parentElement.classList.contains('edit-card') ){
            const noteEditedAddedOnArray = NotesCtrl.editCurrent(noteSelected)
            Storage.setNotes(noteEditedAddedOnArray)
        }
        
    }
  
    return {
        async init(){
            
            const notes = NotesCtrl.getNotes()

            if(notes.length > 0){
                UICtrl.populateNotesList(notes)
            }

            loadEvents();
            
        },
        
    }
})(NotesCtrl, UICtrl, Storage);


App.init();