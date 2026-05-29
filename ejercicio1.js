const prompt = require('prompt-sync')();

const cuentaCliente = parseInt(prompt("Ingrese el valor de su cuenta: "))
const porcentajeCliente = parseInt(prompt("Ingrese el porcentaje de propina que desea aportar: "))

function calcularPropina(total,porcentaje) {
    propina = total * porcentaje / 100
    cuenta = total + propina
    return cuenta
}

console.log("El total a pagar es de:", calcularPropina(cuentaCliente,porcentajeCliente));
