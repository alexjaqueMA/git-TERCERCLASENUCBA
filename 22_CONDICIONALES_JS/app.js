// Un condicional es la respuesta de nuestro programa a determinada situacion o "condicion" la cual, SI se cumple, nos va a responder de N forma y SINO nos va a dar otra respuesta.

/*
    SI tengo 18 años o más de 18 años:
        Soy mayor de edad
    SINO:
        No soy mayor de edad
*/

// Vamos a pasar el condicional de arriba a codigo.

const edad= prompt ("ingresa una edad:");

if(edad >= 18 && edad <= 21){
    alert("Sos mayor de edad y naciste a partir del año 2000");
} else if(edad > 21){
    alert("Sos mayor de edad y naciste antes del año 2000");
} else {
    alert("Sos menor de edad");
}

/*

= : compara de forma no estricta y evañua si sobre-escribir el valor de una condicion, este operador
jamas se utiliza en un condicional

==  :compara de forma NO estricta el valor de nuestra variable con la condicion
a cumplir

=== : compara de forma estricta, nuestra variable o dato con el valor de la condicion a 
cumplir


<> : EL simbolo menor y mayor, lo que hacen es delimitar un vector numerico en el cual nuestra
condicion se cumple o no 

&& : Representa el valor AND o y en español , y su funcion es la de concatenar 
varias condiciones que deben complirse para ejecutar las instrucciones que se encuentran dentro de IF

// : OR p O en es español , en donde su funcion , es que SI se cumple una condicion 0 la otra
condicion, se ejecuta lo que esta dentro de nuestro condicional. 

*/

//-----------------------------------------------------------------------------------------------------------------------

// Switch statement 

switch (new Date().getDay()) {

    case 0:
        day= "Domingo";
        alert(day);
        break;
    case 1:
        day= "Lunes";
        alert(day);
        break;
    case 2:
        day= "Martes";
        alert(day);
        break;
    case 3:
        day= "Miercoles";
        alert(day);
        break ;
    case 4:
        day=" Jueves";
        alert(day);
        break;
    case 5:
        day= "Viernes";
        alert(day);
        break;
    case 6:
        day= "Sabado";
        alert(day);
        break ;
    
}

// Ejercicio 1 CARACTERES

const nombres= prompt("ingrese un nombre: ");

  
  if(nombres.includes('a')){

    console.log("el texto contiene la letra A");
    alert("el texto contiene la letra A");
  }   else{
            console.log("el texto no contiene la letra A");
            alert("el texto no contiene la letra A");
         }



//EJERCICIO 2 

const texto = prompt("Introduce el texto");
document.write(texto.toUpperCase());

document.write(texto.toLowerCase());

//EJERCICIO 3

