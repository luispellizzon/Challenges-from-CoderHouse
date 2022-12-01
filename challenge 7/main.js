const list = document.querySelector(".list");

const friends = parseInt(prompt("How many friends would you like to add in your contact list?"))

 friends != null ? askDetails(friends) : console.log("No friends added")


 function askDetails(num){

    for(let i = 1; i <= num ; i++){
        const name = prompt(`Name of friend ${i}:`)
        const number = prompt(`Phone number of friend ${i}`)
    }
 }