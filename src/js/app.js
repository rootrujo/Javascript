// Forma de comentar en JS

/*
 Múltiples líneas 
*/


/**
 * Multimples lineas con astericos que den formato
 * Multimples lineas con astericos que den formato
 */

// TIPOS DE DATOS  #5

// Number
var numero = 10;

// String caracteres 
var string = "Esto es un string";
var string2 = 'Esto es un string con comillas simples';
var string3 =  `Esto es un string nuevo`;

// Boolean
var boolean1 = true;
var boolean2 = false;

// Null
var vacio = null;

// Undefined
var indefinido = undefined;

/**
 * OPERADORES ARITMETICOS
 */

 var suma = 3 + 6;
 var resta = 3 - 6;
 var multiplicacion = 3 * 6;
 var division = 5 / 2;

 // Modulo
 var modulo = 5 % 2;

 /**
  * OPERADORES LOGICOS
  */

  var mayorQue = 9 > 8;
  var menorQue = 7 < 4;
  var mayorQueoIgual = 7 >= 7;
  var menorQueoIgual = 4 <= 3;
  var igual = 4 == 4;
  var desigual = 4 != 4;

  var valorachecar = 20;
  var esvalido = (valorachecar <=20) || (valorachecar >=30) // Signigica O
  var esvalido = (valorachecar <=20) && (valorachecar >=30) // Significa Y
//   console.log ("Es valido? ", esvalido);

  // IF

  if (false) {
      // ... codigo que se ejecuta si  valorachecar es true
      console.log("Es verdadero")
  } else if() {
      // ... codigo que se ejecuta si valorachecar es false
      console.log("Es falso")
  }

  // LOOP
var contador = 0;
  while(contador <=10) {
    // console.log("Hola", contador);
    contador = contador + 1;
  }
 
 
  // LOOP DO WHILE
 var contador2 = -100;
//    do {
    if (contador2 < 0) {
       contador2 = 0;
       console.log("CONTADOR vista");
   }
       contador = contador + 1;
   } while (contador2 < 10);
// 
//  LOOP FOR
var i= 0;
  console.log("loop for")
for (var i = 0; i < 10; i++){
    console.log("Hola contador", i);
}