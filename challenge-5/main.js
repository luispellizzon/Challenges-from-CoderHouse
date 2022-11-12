
/* Classe Dart um dardo com as cordenadas x e y em um plano cartesiano */
class Dart {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

/* Classe Game ,  onde o seu parametro para construcao e um array de dardos*/
class Game {
    constructor(darts){
        this.darts = darts
        console.log(this.darts)
    }

    /* Funcao para somar e retornar os pontos do usuario */
    getPoints (){
        let points = 0;
        let dartsArray = this.darts;
        /* Para cada dardo em um array, calcular a pontuacao baseado em suas coordenadas */
        for(let i = 0; i < userDarts.length; i++){
            let x = dartsArray[i].x;
            let y = dartsArray[i].y;

            /* Calcular a distancia em raios do dardo, usando como referencia o centro do plano cartesiano como principal target*/
            let radius = Math.abs(Math.sqrt( x * x + y * y));

            /* Fora do Circulo: Se o raio for maior que 10, 0 ponto*/
            if(radius > 10){
                points = points + 0;
            } /* Circulo Maior: Se o raio for maior que 5 e igual a 10, 1 ponto*/
            else if(radius > 5){
                points = points + 1;
            } /* Circulo Medio: Se o raio for maior que 1 e igual a 5, 5 pontos*/
            else if(radius > 1){
                points = points + 5;
            }/* Circulo Principal: Se o raio for menor que 1 e igual a 0, 10 pontos*/ 
            else {
                points = points + 10;
            }
        }
        return points;
    }
}

/* Adicione dardos no userDarts Array, instanciando a classe Dart */
/* e.g. new Dart(x,y) */
let userDarts = [
    // new Dart(0,0),
    // new Dart(1,2),
    // new Dart(5,2),
    // new Dart(3,4),
]

/*Intancia Game com o argumento userDarts*/
const game = new Game(userDarts);

/* Mostre os pontos no console */
console.log(game.getPoints())