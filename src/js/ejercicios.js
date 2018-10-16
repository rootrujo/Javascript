// EJERCICIO 1
// var num1 = 33;
// var num2 = 33;

// if ((num1 % num2) == 0) {
    // console.log("La división es exacta")
// } else{
    // console.log("La división no es exacta")
// }


/* 
  EJERCICIO 2 
  Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.
if (num1 > num2){
    console.log(num1, "es el mayor")
    console.log(num2, "es el menor")
} else if(num1 < num2) {
    console.log(num2, "es mayor")
    console.log(num1, "es menor")
 } else if (num1 == num2){
     console.log("Ambos son iguales")
 }
OTRA MANERA
 else {
     console.log("ambos son iguales")
 }
 */

// EJERCICIO 3

// Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.
var anioactual = 2018;
var algunanio = 2018;
if (anioactual > algunanio){
    console.log("hHan pasado ", (anioactual - algunanio), "años");
} else if (anioactual === algunanio) { 
    console.log("es el mismo año");
} else {
    console.log("faltan ", (algunanio - anioactual), "años");

}