const prompt = require('prompt-sync')();

const objeto = prompt("Escriba el producto que desea mirar si se encuentra en el inventario: ")
function buscarProducto() {
    const inventario = [
        { nombre: "Camisa", precio: 20 },
        { nombre: "Zapatos", precio: 50 },
        { nombre: "Pantalon", precio: 55}
    ];

    let existe = false
    for (let producto in inventario){
        if (objeto.toLowerCase() === inventario[producto].nombre.toLowerCase()) {
            existe = true
        }
    }
    if (existe === true) {
        console.log("Su producto "+objeto+" si se encuentra en nuestro inventario.");
    }else{
        console.log(null);        
    }
}

buscarProducto();