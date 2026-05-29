const prompt = require('prompt-sync')();

const contrasenia = prompt("Ingrese su contraseña: ")
const comprobacion = contrasenia.split("");

function contraCorrecta() {
    let conteo = contrasenia.length
    let tieneMayusculas = false
    let tieneNumero = false

    if (conteo === 8) {
        for (let letra of comprobacion) {
            if (letra === letra.toUpperCase() && letra !== letra.toLowerCase()) {
                tieneMayusculas = true                
            }
            if (letra >= 0 && letra <= 9) {
                tieneNumero = true
            }
        }
        if (tieneMayusculas === true && tieneNumero === true) {
            console.log("Su contraseña es valida");
            
        }   
    }else{
        console.log("Su contraseña no cumple con los requisitos."); 
    }
}

contraCorrecta();

