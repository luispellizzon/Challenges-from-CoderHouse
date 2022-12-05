const friends = [
    {
    name: 'Luis',
    number: '04344292937'
    },
    {
    name: 'Amanda',
    number: '0838987035'
    },
    {
    name: 'Tayna',
    number: '0219996005'
    },
    {
    name: 'Bruna',
    number: '04133292989'
    },
    {
    name: 'Tomas',
    number: '0838687432'
    },
]

const list = document.getElementById('list');
console.log(list)

friends.map(friend =>{
    const li = document.createElement('li')
    li.innerHTML = `
        <h2>Name:${friend.name}</h2>
        <p>Phone number:${friend.number}</p> 
    `
    list.appendChild(li)
});
