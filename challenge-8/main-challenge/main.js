const postTitle = document.getElementById('post-title');
const postText = document.getElementById('post-text');
const postForm = document.getElementById('post-form');


/*-- Create state to easily manage values --*/
const state = {
    [postTitle.id]: '',
    [postText.id]: '',
    posts: [],
}

/* -- Get inputs and add an event listener on both to get the user values--*/
const postDetails = [postTitle, postText]
postDetails.forEach(input => input.addEventListener('keyup', getDetails))


/*-- Add submit event on form --*/
postForm.addEventListener('submit', submitPost)

/*-- Functions --*/

/*-- Get values from inputs and add them on the state --*/
function getDetails(e){
    state[e.target.id] = e.target.value
}

/*-- Submit post values and create a post --*/
function submitPost(e){
    e.preventDefault();
    
    if(state[postTitle.id] == '' || state[postText.id] == ''){
        alert("Make sure all the fields are completed before submission!")
        return;
    }

    /*-- Create a basic id for each post --*/
    let postId = state.posts.length ? state.posts.length + 1 : 1; 

    /*-- Get list where the posts will be appended --*/
    const postList = document.getElementById('post-list')

    /*-- Create li tag and add post class --*/
    const li = document.createElement('li')
    li.classList.add('post')

    /*-- If user post has line breaks, split and make that part of the text a paragraph --*/
    const text = state[postText.id].split('\n').map(p => `<p>${p}</p>`).join(' ')


    /*-- Create a new post object --*/
    const newPost = {
        id: postId,
        title: state[postTitle.id],
        text
    }

    li.id = newPost.id;
      /*-- Post Structure --*/
      li.innerHTML =`
      <h2>${newPost.title}</h2>
      <div>${text}</div>
      <button id="delete" class="delete"><i class="fa-solid fa-trash-can"></i></button>
      `;
  
      /*-- Append post on List --*/
      postList.prepend(li)
  

    /*-- Add new post on posts array on state --*/
    state.posts.unshift(newPost)

    const deleteBtn = document.getElementById('delete');
    deleteBtn.addEventListener('click', deletePost)

    /* -- Reset all the input values on UI --*/
    state[postTitle.id] = ''
    state[postText.id] = ''
    postTitle.value = ''
    postText.value = ''

    /*-- END OF FUNCTION--*/
}

function deletePost(e){
    if(e.target.id !== 'delete' && e.target.parentNode.id !== 'delete'){
        return;
    }

    // const confirmation = confirm("Are you sure you would like to delete this post?")

    // if(!confirmation){
    //     return;
    // }

    const filteredPosts = state.posts.filter(post => post.id != e.target.parentNode.parentNode.id)
    console.log(filteredPosts)
}