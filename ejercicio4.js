const prompt = require('prompt-sync')();

const notas = prompt("Ingrese sus notas para conocer el promedio, separe cada nota con una , (coma): ");
const listaNotas = notas.split(",");

function calcularPromedio() {
    const notasLista = listaNotas.map(Number);
    
    let suma = 0
    let cantidad = notasLista.length
    for (let i of notasLista) {
        suma = suma + i
    }
    let promedio = suma / cantidad
    console.log("Su promedio es de:",promedio.toFixed(2));
}

calcularPromedio();