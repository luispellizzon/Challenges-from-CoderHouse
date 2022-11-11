

const primeNumberSimulator = () =>{
    const number = prompt("Insira um numero inteiro positivo:")
    const numCheck = formatNumberAndCheck(number)
    checkIsPrimeNumber(numCheck)
}

/* Checar se input e numero e formatar, return error message se nao for numero */
function formatNumberAndCheck(input){
    let inputFormatted = parseInt(input);
    
    if(isNaN(inputFormatted)){
        let errorString = "Por favor, insira apenas numeros"
        return {
            checked: false,
            errorString
        }
    } else {
        return {
            checked: true,
            num: inputFormatted
        }
    }
}

/* Checar se o numero checado anteriormente e primo ou nao, se checagem retornar error message, alertar */
function checkIsPrimeNumber (numObject){
    const {checked, num, errorString} = numObject;
    if(checked){
        let isPrime = true;

        if (num === 1) {
            alert("1 nao é primo é nem composto");
        }
        
        else if (num > 1) {
        
            // looping through 2 to num-1
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        
            if (isPrime) {
                alert(`${num} É um numero primo`);
            } else {
                alert(`${num} NÃO é um numero primo`);
            }
        }
        
        // Se numero for negativo
        else {
            alert("Por favor, apenas insina numero inteiros positivos");
            
        }
    } else {
        alert(errorString)
    }

 

    primeNumberSimulator();
}


primeNumberSimulator(); 