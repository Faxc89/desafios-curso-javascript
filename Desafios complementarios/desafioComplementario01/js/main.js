// DESCRIPCIÓN:
// Simulo carrito de compra en una seccion "TAZAS"
// de una tienda online de productos de cerámica.
// Utilizo DO WHILE para realizar mi ciclo. 

// let nombre = prompt("Ingresá tu nombre para continuar: ").toUpperCase();
// let taza = "";
// let precio = 0;
// let cantidad = 0;
// let precioTotal = 0;
// let seguirComprando = false;
// let menuPrincipal = false;
// do{
//     taza = prompt(` 
//     ¡${nombre} bienvenidx a la sección de TAZAS! 
//     ---------------------------------------
//     *TAZA MAPACHE
//     *TAZA ZORRO
//     *TAZA KOALA
//     *TAZA PANDA
//     ---------------------------------------
//     Por favor escribe una opción:`).toUpperCase();

//     cantidad = Number(prompt(`
//     ¿${nombre}, CUÁNTAS >${taza}< QUERÉS COMPRAR?`));

//     switch (taza) {
//         case "TAZA MAPACHE":
//             precio = 950;
//             break;
//         case "TAZA ZORRO":
//             precio = 700;
//             break;
//         case "TAZA KOALA":
//             precio = 700;
//             break;
//         case "TAZA PANDA":
//             precio = 850;
//             break;
//         default:
//             alert(`
//             ¡OOPS!
//             Al parecer >${taza}<no es una opción valida,
//             vuelve a intentar.
//             `);
//             precio = 0;
//             cantidad = 0;
//             break;
//     }
//     precioTotal += precio * cantidad;
//     seguirComprando = confirm("¿Queres seguir comprando?");
// } while (seguirComprando);

// alert(`
// ¡Enhorabuena ${nombre}!

// El total a pagar por tu compra es de $${precioTotal}.-
// `);

// menuPrincipal = confirm(`
// ${nombre}, ¿querés ir al menú principal?
// `);let monto = 1000;
// let cuotas = Number(prompt(`
// ------------------------------------
// El monto a pagar es USD 1000.-
// ------------------------------------
// ¿En cuántas cuotas queres hacerlo?
// >  1
// >  3
// >  6
// >  12

// Por favor elegí el N° de cuotas:
// `));


// function calcularCuotas(monto, cuotas) {
//     switch (cuotas) {
//         case "1":
//             let resultado = monto;
//             alert(`
//             Has elegido pagar en 1 cuota,
//             tu monto a pagar es USD${resultado}`)
//             break;
//         case "3":
//             resultado = monto / 3;
//             alert(`
//             Has elegido pagar en 3 cuota,
//             tu monto a pagar es USD ${resultado}`)
//             break;
//         case "6":
//             resultado = monto / 6;
//             alert(`
//             Has elegido pagar en 6 cuota,
//             tu monto a pagar es USD ${resultado}`)
//             break;
//         case "12":
//             resultado = monto / 12;
//             alert(`
//             Has elegido pagar en 12 cuota,
//             tu monto a pagar es USD ${resultado}`)
//             break;
    
//         default:
//         alert("El monto ingresado no es válido")
//             break;
//     }
    
// }
// calcularCuotas(resultadp, 3);

// 



// let monto = 1000;
// let tuMonto = alert(`Has seleccin`)
// let cuotas = prompt("En cuantas cuotas hará el pago\n\n 3, 6, 12?");

// function dividirCuotas(monto, cuotas){
//     let resultado = monto / cuotas;
//     alert(resultado)
// }

// dividirCuotas();
