
const produtos = [
    {name: "Banana", quantity: 7, validade: 'December 10, 2022'},
    {name: "Arroz", quantity: 4, validade: 'November 25, 2022'},
    {name: "Leite", quantity: 2, validade: 'November 20, 2022'},
    {name: "Chocolate", quantity: 6, validade: 'December 1, 2022'},
    {name: "Farinha", quantity: 1, validade: 'December 5, 2022'},
    {name: "Carne", quantity: 3, validade: 'November 30, 2022'},
]

/* Sort By Quantity order Ascending */
// const sortedBasket = produtos.sort((a,b) => a.quantity - b.quantity);

/* Sort By Quantity order Descending */
// const sortedBasket = produtos.sort((a,b) => a.quantity + b.quantity);

/* Sort By Name order Ascending */
// const sortedBasket = produtos.sort((a,b) =>{
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) {
//         return -1;
//       }
//       if (nameA > nameB) {
//         return 1;
//       }
    
//       return 0;
// } )

/* Sort By Name order Descending */
// const sortedBasket = produtos.sort((a,b) =>{
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA > nameB) {
//         return -1;
//       }
//       if (nameA < nameB) {
//         return 1;
//       }
    
//       return 0;
// } )

/* Sort By Validade order Ascending */
// const sortedBasket = produtos.sort((a,b) =>{
//     a = new Date(a.validade)
//     b = new Date(b.validade)

//     return a - b;
// } )

/* Sort By Validade order Descending */
// const sortedBasket = produtos.sort((a,b) =>{
//     a = new Date(a.validade)
//     b = new Date(b.validade)

//     return a + b;
// } )


sortedBasket.forEach((e) => {
    console.log(`Produto: ${e.name},\nQuantidade: ${e.quantity},\nValidade: ${e.validade} `);
});