const list = document.querySelector(".list");
const section = document.getElementById('contactList')

const friends = parseInt(prompt("How many friends would you like to add in your contact list?"))
 
friends ? askDetails(friends) : section.append("No friends added..")

function askDetails(num){

    let friends = []
    for(let i = 1; i <= num ; i++){
        const name = prompt(`Name of friend ${i}:`)
        const number = prompt(`Phone number of friend ${i}`)
        const friend = {
            name,
            number
        }
        friends.push(friend)
    }

    friends = friends.sort((a, b) => a.name.localeCompare(b.name));
    
    addToTheList(friends);
}

 

 function addToTheList(friends){
    friends.forEach(friend =>{
        const li = document.createElement('li')
        li.innerHTML = `
            <h2>Name:${friend.name}</h2>
            <p>Phone number:${friend.number}</p> 
        `
        list.appendChild(li)
    });
 }



