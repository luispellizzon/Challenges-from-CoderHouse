const postTitle = document.getElementById('post-title');
const postText = document.getElementById('post-text');
const postForm = document.getElementById('post-form');

const postDetails = [postTitle, postText]
postDetails.forEach(input => input.addEventListener('keyup', getDetails))

postForm.addEventListener('submit', submitPost)

function getDetails(e){
    
    const info = {[e.target.id]: e.target.value}
    return info
}
function submitPost(e){
e.preventDefault();


}