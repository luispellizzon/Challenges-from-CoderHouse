alert("Ola, Bem vindo a loja online Dealz");

let isNumber = false;
let quantity;

/* -- Checar se usuario inseriu apenas numeros para o tamanho da lista de compras */
while(!isNumber){
    quantity = parseInt(prompt("Quantos produtos deseja adicionar a sua lista?\nInsira apenas numeros inteiros.\nEx: 5"));
    if(!Number.isInteger(quantity)){
        alert("Por favor, insira em numeros inteiros o total de items que deseja adicionar na sua lista")
    } else {
        isNumber = true
    }  
}

let products = [];
let itemNumber = 1;

for(let i = 0; i < quantity ; i++){
    const product = prompt(`Insira o item ${itemNumber} que deseja adicionar em sua basket.`);
    products.push(product)
    itemNumber = itemNumber + 1;
}

/* Mostrar basket do usuario e perguntar se deseja exluir algum*/
let lista = products;
const isDelete = confirm(`Items adicionados a sua lista:\n${lista.join(", ")}`);

if(!isDelete){
    alert("Imprima sua lista e aproveite suas compras!")
} else {
    let itemsToDelete = prompt(`Quais items deseja excluir da lista?\nLista: ${lista}\nEx: Banana, Pera, Goiaba`)
    /* Criar um array que haja apenas palavras, excluindo qualquer tipo de numero, virgula ou espaco */
    const itemsToSearch = itemsToDelete.match(/\w+/gm)

    /*Criar um array dos items deletados e um for loop para deletar os items que o usuario deseja deletar da lista original*/
    let itemsDeleted = []
    for(let i = 0; i < itemsToSearch.length; i++){
        
        if(lista.includes(itemsToSearch[i])){
           itemsDeleted.push(lista.splice(lista.indexOf(itemsToSearch[i]), 1)[0])
        }
    }
    
    /* Mostrar lista */
    alert(`Sua nova lista:\n${lista.join(", ")}\nItems excluidos:\n${itemsDeleted.join(", ")}`)
}





