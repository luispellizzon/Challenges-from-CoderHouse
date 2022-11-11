
const App = () => {

    const VALOR_ANUAL = 180;
    const services = {
        organico: 0.21,
        reciclavel: 0.21,
        vidro: 0.21,
    };

    const { organico, reciclavel, vidro} = services;

    const confirmPrompt = confirm(
        `    Bem vindo a empresa Green Clean, localizada em Dublin, Irlanda.
        Nossos precos estao descritos abaixo:

        Contratacao de servico: ${VALOR_ANUAL} euros anual.
        Organico: ${organico}c kg
        Reciclavel: ${reciclavel}c kg
        Vidros: ${vidro}c kg

    Aperte OK para simular o preco anual do nosso servico.
    `);

    
    

    const readUserInput = () =>{
        let userResults = [];
        for(let key in services){
            let userResult = prompt(`Estimativa de lixo ${key} semanal em kilos.`);
    
            if(userResult === "" || userResult === null){
                userResult = 0;
                userResults.push(userResult)
                
            } else {
                userResult = parseFloat((Math.round(userResult * 100) / 100).toFixed(2));
                userResults.push(userResult)
            }
        }

        return userResults;
    }

    if(confirmPrompt){
  
        const result = readUserInput();
       console.log(result)
   }
}
    

    




App();