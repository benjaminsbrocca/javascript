let producto = '';
let precioTotal = 0;
let cantidadTotal = 0;

function seleccionarProducto() {
    producto = prompt('¿Qué producto deseas comprar? (Alfajor, Chocolate, Chicles, Papas, Gomitas)').toLowerCase();
    let cantidad = parseInt(prompt('Ingresa la cantidad del producto que desees'));

    while (isNaN(cantidad) || cantidad <= 0) {
        alert('Los datos ingresados no son correctos');
        cantidad = parseInt(prompt('Ingresa una cantidad válida del producto que desees'));
    }

    let precioNeto;

    switch (producto) {
        case 'alfajor':
            precioNeto = 1100;  
            break;
        case 'chocolate':
            precioNeto = 700; 
            break;
        case 'chicles':
            precioNeto = 500;  
            break;
        case 'papas':
            precioNeto = 1500;
            break;
        case 'gomitas':
            precioNeto = 400;
            break;
        default:
            alert('No tenemos ese producto');
            return;
    }

    const precioConIva = precioNeto * 1.21;
    const totalUnitario = precioConIva * cantidad;
    precioTotal += totalUnitario;
    cantidadTotal += cantidad;

    console.log('Adquiriste '+ cantidad + ' unidades de ' + producto + ' y el total es de $' + totalUnitario);
}

function otraVez() {
    let confirmar;
    do {
        seleccionarProducto();
        confirmar = confirm('¿Deseas agregar otro producto al carrito?');
    } while (confirmar);

    if (cantidadTotal >= 10) {
        const descuento = precioTotal * 0.10;
        precioTotal -= descuento;
        console.log('Recibiste un descuento del 10% por comprar 10 productos o más! Descuento obtenido: $' + descuento.toFixed(2));
    }

    console.log('El precio total de los productos adquiridos es de $' + precioTotal);
    alert('¡Gracias por tu compra! Tenés que ir a la consola para ver el resumen.');
}

console.log('Productos en el carrito:');
otraVez();