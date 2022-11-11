
const App = () => {

    /* Global Variables */
    const VALOR_ANUAL = 180;
    const WEEKS_PER_YEAR = 52.14

    /* services Object key/value */
    const services = {
        organico: 0.21,
        reciclavel: 0.05,
        vidro: 0.11,
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

    /* Helper function to format number up to 2 decimal points*/
    const parseAndFixDecimal = (number) =>{
        const numberFixed =  parseFloat((Math.round(number * 100) / 100).toFixed(2))
        return numberFixed;
    }
    
    

    /* Put in an array the values from user for each type of waste */
    const readUserInput = () =>{
        let userResults = [];

        for(let key in services){
            let userInput = prompt(`Estimativa de lixo ${key} semanal em kilos (Utilizar numeros inteiros exemplo: 120).`);
    
            if(userInput === "" || userInput === null){
                userInput = 0;
                userResults.push(userInput)
                
            } else {
                userInput = parseAndFixDecimal(userInput);
                userResults.push(userInput)
            }
        }
        return userResults;
    }

     /* Calculate total */
    const calculateTotal = (userValues) =>{
        const resultValues = userValues.map((value, index) =>{
    
            const total = value * Object.values(services)[index] * WEEKS_PER_YEAR;
            return total
        }).reduce((prev, curr) => prev + curr, VALOR_ANUAL)
        
        const formattedFinalResult = parseAndFixDecimal(resultValues)
        return formattedFinalResult;
    }

    if(confirmPrompt){
        const startSimulator = () => {
            const userWasteKgs = readUserInput();
            const totalServiceAnnual = calculateTotal(userWasteKgs)
            
            alert(` O valor total ao ano sera de: ${totalServiceAnnual} euros`)
            
            const reset = confirm("Gostaria de simular novamente?")

            if(reset){
                startSimulator();
            }
        }
        startSimulator();
   }
}
    
App();