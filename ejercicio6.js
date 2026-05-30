const prompt = require('prompt-sync')();

const frase = prompt("Ingrese la frase que desee: ")
function contarPalabras() {
    const corte = frase.split(" ")
    let conteo = corte.length

    console.log("Su frase tiene "+conteo+" palabras");
}

contarPalabras();