// Estas son las 2 funciones basicas de Javascript
// alert("Hola 1717!");
// prompt("¿Que dia es hoy?");

// Vamos a ver variables
// La version Old School
var estoEsUnSaludo = "Hola!";
// En var el scope es global, esto significa que declaro la variable y la puedo llamar desde cualquier parte del codigo, VAR te permite modificar su valor y actualmente no se recomienda su uso.

// Desde ES6+
let estoEsOtroSaludo = "Bajale la espuma a tu chocolate";
// Let tiene scope local, es decir, solo existe esa variable dentro del espacio que fue declarada y su valor puede ser modificado.
const esteEsElSaludoFinal = "Chau!";
// Tiene la capacidad de trabajar con scope global y local, sin embargo no pueden ser modificadas.

// NO TODOS LOS DATOS SON IGUALES, hay diferentes tipos de datos
// Existen:
//
// -> Cadenas de texto o String: ex. "Esto es la intro a JS" y van entre comillas simples o dobles.
//
// -> Tipos de datos numericos enteros, o Integers(INT), que son todos los reales positivo y negativos no fraccionales, por ejemplo, 1, 2, 3, 4, blah
//
// -> Tipos de datos numericos NO enteros, es decir con coma o que representan una fracción, tambien conocidos como flotantes, o en el caso de datos como "floats" o "double"
//
// -> Tipo de dato booleano, el cual representa y solo puede expresarse en 0 y 1, o verdadero y falso (true or false)
//--------------------------------------------------------------------------------
//
// En Javascript, por defecto, todas las variables declaradas, son cadenas de texto o string. 

// Vamos saludar
// Declaro una constante para guardar el nombre del usuario.

//EJERCICIO 0
const nombre = prompt("¿Cual es tu nombre?");
// Uso un alert para saludar concatenando con la variable nombre.
alert("Hola " + nombre);

//EJERCICIO 1
// Vamos a crear una calculadora o intentar
const primerNumero = prompt("Introduci un numero");
const segundoNumero = prompt("Introduci otro numero");
const resultadoSuma = parseFloat(primerNumero)+parseFloat(segundoNumero);
alert("La suma es: " + resultadoSuma);


//EJERCICIO 2
const edad = prompt("Introdusca su EDAD");
const añoActual ="2021";
const resultadoEdad = parseInt(añoActual) -parseInt(edad);
alert("Usted Nacio En: " + resultadoEdad);


//EJERCICIO 3
const balanceCuenta = "17000";
const saldoAretirar = prompt ("Cuanto desea retirar de su cuenta:");
const resultadoResta = parseInt(balanceCuenta) -parseInt(saldoAretirar);
alert("Nuevo Balance: " + resultadoResta);

//EJERCICIO 4

const primerNumeroE4 = prompt("Introduci el primer numero");
const segundoNumeroE4 = prompt("Introduci el segundo numero");
const tercerNumeroE4 = prompt("Introduci el tercer numero");
const resultadoDeSumaE4 = parseInt(primerNumeroE4)+parseInt(segundoNumeroE4)+parseInt(tercerNumeroE4);
const promedioE4= parseFloat(resultadoDeSumaE4)/parseInt (3);

alert("El promedio es: " + parseFloat (promedioE4));

//EJERCICIO 5
const metroE5 = prompt("Ingrese una medida de metro:");
const piesE5= metroE5 * 3.281;
const centimetrosE5= metroE5 * 100;
const pulgadasE5= metroE5 *39.37;

alert("El valor en unidad PIES es: " + parseFloat (piesE5) );
alert("El valor en unidad centimetros es: " + parseFloat (centimetrosE5));
alert("El valor en unidad pulgadas es: " + parseFloat ( pulgadasE5 ));

//EJERCICIO 6

const primerNumeroE6 = prompt("Introduci un numero");
const segundoNumeroE6 = prompt("Introduci segundo numero:");
const resultadoSumaE6a = parseFloat(primerNumeroE6)+parseFloat(segundoNumeroE6);

alert("La suma es: " + resultadoSumaE6a);

const tercerNumeroE6= prompt("Introduci un tercer numero:");
const resultadoSumaE6b = parseInt(resultadoSumaE6a)*parseInt(tercerNumeroE6);

alert("La multiplicacion incluyendo un tercer numero : " + resultadoSumaE6b);

//EJERCICIO 7

const minutosE7 = prompt("Introduci un numero/s de minutos: ");
const segundosE7 = 60;
const ConversionE7 = parseInt(minutosE7)*parseInt(segundosE7);

alert("Conversion de minutos a segundos es: " + ConversionE7);


//EJERCICIO 8

const baseE8 = prompt("Introduci el valor de Base: ");
const alturaE8 = prompt("Introduci el valor de Altura: ");
const rectanguloE8 = parseFloat(baseE8)*parseFloat(alturaE8);

alert("El valor de AREA del rectangulo es: " + rectanguloE8);


//EJERCICIO 9

const baseE9 = prompt("Introduci el valor de base del triangulo equilatero: ");

const alturaE9 = prompt("Introduci el valor de altura del triangulo equilatero: ");

const formulaE9= parseFloat(baseE9)*parseFloat(alturaE9)/2;


alert("El valor de AREA del triangulo equilatero es: " + formulaE9);

//EJERCICIO 10


const montoE10= prompt ("Ingrese monto/valor: ");
const descuentoE10 = prompt ("Ingrese su Numero de descuento: ");
const numdescuentoE10= "32900";

if (numdescuentoE10 == descuentoE10) {

    const formulaE10 = montoE10 * 0.2 ;
    alert("el numero de descuento es correcto y su valor descontado es: " + formulaE10);
    
 } else {
    
    alert( "EL NUMERO DE DESCUENTO INGRESADO NO EXISTE");

 }

 //EJERICICIO 11

const nombreE11 = prompt("Ingrese su nombre por favor: ");
const edadE11= prompt ("Ingrese su edad: ");
const añoActualE11= "2021";

const formulaE11= añoActualE11 - edadE11;

alert( "hola : " + nombreE11 + " usted nacio en : " + formulaE11);

//EJERCICIO 12

const nombreE12 = prompt("Ingrese su NOMBRE por favor: ");
const temperaturaE12= prompt ("Ingrese una temperatura CELSIUS: ");


const farenheitE12 = (temperaturaE12  * 9/5) + 32 ;

alert( "hola  " + nombreE12 + "  los grados en Farenheit son : " + farenheitE12);

//EJERCICIO 13

const nombreE13 = prompt("Ingrese su NOMBRE por favor: ");
const temperaturaE13= prompt ("Ingrese una temperatura FARENHEIT: ");


const celciusE13 = (temperaturaE13 - 32) * (5/9) ;

alert( "hola  " + nombreE13 + "  los grados en Farenheit son : " + celciusE13);

//EJERCICIO 14

const numeroE14 = prompt ("ingrese un numero: ");
const sumaE14 = numeroE14 + 5;
const multiplicacionE14 = sumaE14 *10;
const restoE14 = parseInt (multiplicacionE14)/3;

alert ("El resto de la division es: " + parseInt (restoE14));

//-------------------------------------------------------------------------------------//

//BONUSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// EJERCICIO 0


let primerNumeroE0 = prompt ("ingresa el primer numero: ");
let segundoNumeroE0= prompt ("ingrese segundo numero:");

alert (primerNumeroE0+segundoNumeroE0);



// EJERCICIO 1

let primerNumero= prompt ("ingrese cantidad de años:");
let unaHora= 3600;
let unDia = 86400 ;  
let unAño = 31.536.000 ;

let formulaAs = unAño * primerNumero;

alert ("La cantidad de años convertidos a segundos son: " + formulaAs);











// NaN = Not a Number
// parseInt() sirve para convertir un string de un numero entero a numero entero
// parseFloat() toma un numero sea entero o decimal, en string y lo convierte a float o double.