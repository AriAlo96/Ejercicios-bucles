
//Ejercicio 1

// let ingresarNumero = prompt("Ingrese un numero del 1 al 100")

// for (let i=ingresarNumero; i>=0; i--) {
//     console.log (i)
// }

//Ejercicio 2
// let ingresarNum = prompt("Ingrese un numero del 1 al 10")

// for (let i=1; i<=10; i++) {
//     console.log (i + " * " + ingresarNum + " : " + i*ingresarNum)
// }

// //Ejercicio 3
//     let numero;
//     let numerosIngresados = 0;

//     while (numero != 0) {
//         numero = parseFloat(prompt("Ingrese un numero (para finalizar ingrese 0)")) 
//         numerosIngresados += numero
//     } 
//     console.log("La suma de sus numeros es: " + (numerosIngresados += numero))

// //Ejercicio 4
// //  let numero;
// //  let numerosIngresados = 0

// //  do {
// //      numero = parseFloat(prompt("Ingrese un numero (para finalizar ingrese 0)"))
// //      numerosIngresados += numero
// //  } while (numero != 0);

// //  console.log("La suma de sus numeros es: " + (numerosIngresados += numero))

// //Ejercicio 5
//  let numero2 = 0
// let intentos = []

//  while (numero2 != numerosIngresados) {
//      numero2 = parseFloat(prompt("Adivine el numero secreto")) 
//      if (numero2<numerosIngresados) {
//          console.log ("El numero ingresado es menor al numero secreto")
//     } else {
//          console.log ("El numero ingresado es mayor al numero secreto")
//     }
//     intentos.push(numero2)
//  }
//  console.log ("Felicitaciones! Has decifrado el numero secreto en " + intentos.length + " intentos.")

//Ejercicio 6
// let numeroIngresado = parseFloat(prompt("Ingrese un numero para conocer sus divisores"))
// for (let i = numeroIngresado; i >= 0; i--) {
//     if ( numeroIngresado % i === 0) {
//         console.log(i);
//     }
// } 

//Ejercicio 7
// let listaColores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"]

// for (colores of listaColores){
//     console.log(colores);
// }

//Ejercicio 8
// let listaNumeros = [5, 8, 12, 15, 20]
// for (numeros of listaNumeros){
//     console.log(`El numero es ${numeros} y su doble es ${numeros*2}`);
// }

//Ejercicio 9
// let familia = [
//     {nombre: "Andrea",
//     apellido: "Fernandez",
//     edad: 56,
//     integrante: "Madre" 
//     },

//     {nombre: "Adrian",
//     apellido: "Alochis",
//     edad: 56,
//     integrante: "Padre" 
//     },

//     {nombre: "Melina",
//     apellido: "Alochis",
//     edad: 28,
//     integrante: "Hija"
//     },

//     {nombre: "Ariana",
//     apellido: "Alochis",
//     edad: 26,
//     integrante: "Hija"
//     },

//     {nombre: "Lucila",
//     apellido: "Alochis",
//     edad: 24,
//     integrante: "Hija"
//     },

//     {nombre: "Kayrina",
//     apellido: "Alochis",
//     edad: 22,
//     integrante: "Hija"
//     },

//     {nombre: "Fabrizio",
//     apellido: "Alochis",
//     edad: 17,
//     integrante: "Hijo"
//     },

//     {nombre: "Noah",
//     apellido: "Contreras",
//     edad: 5,
//     integrante: "Nieto"
//     }
// ]

//  for (familia of familia) {
//      console.log(`Hola, soy ${familia.nombre} ${familia.apellido} (${familia.integrante}) y tengo ${familia.edad} años.`);
//  }

//Ejercicio 10
//  let datos = {
//      nombre: "Ariana",
//      apellido: "Alochis",
//      esArgentina: true,
//      edad: 26,
//      estudios: ["primario", "secundario", "terciario"]
//  }
//  for (keys in datos)
//  console.log(keys);

//Ejercicio 11
// let datos = {
//     nombre: "Ariana",
//     apellido: "Alochis",
//     esArgentina: true,
//     edad: 26,
//     estudios: ["primario", "secundario", "terciario"]
// }
// for (caracteristicas in datos) {
//     let caract = datos[caracteristicas];
//     console.log(caract)
// }

// Ejercicio 12
// let numero;
// let pares = 0
// let impares = 0

// while (numero != 0) {
//     numero = parseFloat(prompt("Ingrese un numero (para finalizar ingrese 0)"))
//     if (numero % 2 === 0)
//         pares+=numero;
//     else{
//         impares+=numero
//     }
// }
// console.log("Números pares:", pares);
// console.log("Números impares:", impares);

//Ejercicio 13
// let numeros = [29, 15, 26, 45, 11, 67, 23, 98, 4, 56];
// let numeroMayor = numeros[0]

// for (let numero of numeros) {
//   if (numero > numeroMayor) {
//     numeroMayor = numero;
//   }
// }

// console.log("El número más grande es:", numeroMayor);




