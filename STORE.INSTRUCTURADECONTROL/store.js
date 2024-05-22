//declarar variable totalApagar
let totalApagar = 0;

//preguntar cuantos productos va a comprar
let cantidadProductos = Number(prompt("¿Cuantos productos va a desear?"));

///iteracion con for
for (let i = 0; i < cantidadProductos; i++) 
    {
    //preguntar el nombre añ cliente
    const nombreProducto = prompt("¿El producto que desea es?");
    //preguntar cuantos va a comprar
    const cantidad = Number(prompt("¿Cuantos va a comprar?"));
    //preguntar el precio de cada producto
    const precio = Number(prompt("¿Cuanto cuesta el producto?"));
    //Calcular el subtotal
    const subtotal = cantidad * precio;

    /// Sumar el subtotal a la variable "totalApagar".
     totalApagar += subtotal;
}

//Mostrar al usuario el total a pagar
alert(`El total a pagar por la compra es: $${totalApagar}`);