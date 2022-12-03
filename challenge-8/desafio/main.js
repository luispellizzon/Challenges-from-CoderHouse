const postTitle = document.getElementById('post-title');
const postText = document.getElementById('post-text');
const postForm = document.getElementById('post-form');

const state = {
    [postTitle.id]: '',
    [postText.id]: ''
}

const postDetails = [postTitle, postText]
postDetails.forEach(input => input.addEventListener('keyup', getDetails))

postForm.addEventListener('submit', submitPost)

function getDetails(e){
    state[e.target.id] = e.target.value
}


function submitPost(e){
    e.preventDefault();
    
    if(state[postTitle.id] == '' || state[postText.id] == ''){
        console.log("Fill the inputs")
        return;
    }
    const postList = document.getElementById('post-list')
    const li = document.createElement('li')
    li.classList.add('post')
    li.innerHTML =`
    <h2>${state[postTitle.id]}</h2><p>${state[postText.id]}</p>
    `;
    postList.prepend(li)
    state[postTitle.id] = ''
    state[postText.id] = ''
    postTitle.value = ''
    postText.value = ''
}