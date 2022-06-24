// DESCRIPCIÓN:
// Reciclo el código de el desafio complementario 01, 
// que es un simulador de compra de tazas, con cantidad y precio.
// INCORPORO opción de pago, en 1 pago o en cuotas (3,6,12). AÑADO una función
// para calcular las cuotas y adicionar impuesto IVA.

let nombre = prompt("Ingresá tu nombre para continuar: ");
let taza = "";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let precioFinal = 0;
let seguirComprando = false;
let menuPrincipal = false;
do{
    taza = prompt(` 
    ¡${nombre} bienvenidx a la sección de Tazas! 
    ---------------------------------------
    > MAPACHE
    > ZORRO
    > KOALA
    > PANDA
    ---------------------------------------
    Por favor escribe una opción:`).toUpperCase();

    cantidad = Number(prompt(`
    ¿${nombre}, CUÁNTAS TAZAS >${taza}< QUERÉS COMPRAR?`));

    switch (taza) {
        case "MAPACHE":
            precio = 950;
            break;
        case "ZORRO":
            precio = 700;
            break;
        case "KOALA":
            precio = 700;
            break;
        case "PANDA":
            precio = 850;
            break;
        default:
            alert(`
            ¡OOPS!
            Al parecer >${taza}<no es una opción valida,
            vuelve a intentar.
            `);
            precio = 0;
            cantidad = 0;
            break;
    }
    precioTotal += precio * cantidad;
    seguirComprando = confirm("¿Queres seguir comprando?");
} while (seguirComprando);

alert(`
¡Enhorabuena ${nombre}!

El total a pagar por tu compra es de $${precioTotal}.-
`);

let tipoPago = confirm(`
¿Querés abonar en cuotas?`);
let cuotas = 0;


if (tipoPago == true) {
    cuotas = Number(prompt("En cuantas cuotas hará el pago\n\n 3, 6, 12?"));
        function dividirCuotas(monto, cuotas){
            precioFinal = monto / cuotas;
            alert(`
            Has elegido abonar en ${cuotas} cuotas,
            el total a abonar es de $${precioFinal}.-`);
            return;
        }
} else {
    alert(`
    Has elegido abonar en un solo pago,
    el total a abonar es de $${precioTotal}.-`)
}

dividirCuotas(precioTotal, cuotas);
