//1- Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase


let frase = "esto es una frase de ejemplo";
let contadorLetras = 0;

function contarLetras() {
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letraBuscada) {
      contadorLetras++;
    }
  }
  return contadorLetras;
}

const letraBuscada = "a";
const resultadoTotal = contarLetras();

console.log(resultadoTotal);


//2- Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números


//coge los numeros impares, pero despues de esto con el poco tiempo que queda no se como seguir y tampoco me da tiempo
function impares50(num){
    for (let i = num; i < num; i++){
        if (i %2 !== 0){
            console.log(i)
        }
    }

}