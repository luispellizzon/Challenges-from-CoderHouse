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

console.log(state)
}