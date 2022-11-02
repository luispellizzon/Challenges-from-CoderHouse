

  // --> Welcoming the user!
alert("Vamos ver se voce tem o direito de conduzir um carro no brasil. Vamos la?")


function driverChecker (){
    
    // --> Check if user has drivers` license
    let isAble = confirm("Voce tem carteira de habilitacao?");

    if(isAble === false){
        alert("Voce nao pode dirigir, mesmo que tenha 18 anos ou mais!");
        tryAgain();
    } 
  
    // --> Check user age
    let userAge = prompt("Qual a sua idade?");
    
    // --> If user cancels instead of hitting ok it will return null
    if(userAge === null){
        alert("Voce nao digitou a sua idade.");
        tryAgain()
    } 

    // --> Transform user input in Number
    userAge = parseInt(userAge)
    
    // --> If user input is not number, it will return NaN
    if(isNaN(userAge)){
        alert("Por favor, insira sua idade em numeros.");
        tryAgain();
    } 
    

    // --> If user inputs a number, we check the range and return.
    if(userAge >= 18){
        alert("Parabens, Voce pode dirigir no Brasil!");
    }else{
        alert("Infelizmente, voce nao pode dirigir no Brasil, mas pode dirigir em outros paises se a lei permitir!");
    }
    tryAgain()
}




function tryAgain (){
    // --> Let user check again with different details.
  let confirmation = confirm("Voce gostaria de checar novamente?")

  if(confirmation === true){
    driverChecker();
  } else {
    alert("Ficamos agradecidos por confiar no nosso sistema.\nEquipe Coderhouse")
  }
}
 
driverChecker();

