
const produtos = [
    {name: "Banana", quantity: 7},
    {name: "Arroz", quantity: 4},
    {name: "Leite", quantity: 2},
    {name: "Chocolate", quantity: 6},
    {name: "Farinha", quantity: 1},
    {name: "Carne", quantity: 3},
]

/* Sort By Quantity order Ascending */
// const sortedBasket = produtos.sort((a,b) => a.quantity - b.quantity);

/* Sort By Quantity order Descending */
const sortedBasket = produtos.sort((a,b) => a.quantity + b.quantity);
console.log(sortedBasket)