
//Operaciones basicas
let a=1;
let b=2;
console.log(a+b);//suma
console.log(a-b);//resta
console.log(a*b);//multiplicacion
console.log(a/b);//division
console.log(a%b);//modulo
console.log(a**b);//exponente
//Datos Primitivos
//string
let palabra1="campus";
let palabra2="land";
let palabra3=" university";
concatenacion=palabra1+palabra2+palabra3;
console.log(concatenacion);
//booleanos 
let verdadero=true;
let falso=false;
console.log(verdadero);
//operadores logicos    &&    ||   !
//operadores de comparacion    ==    ===    !=    !==

//funtions
//Con retorno y parametro
function suma(a,b){
    return a+b;
}
console.log(suma(1,2)); 

//sin retorno y sin parametro
function saludo(){
    console.log("hola");
} 
saludo();

//sin retorno y con parametro
function saludo2(nombre){
    console.log("hola "+nombre);
}
saludo2("John"); 

//funtions sin retorno y sin parametro
function saludo3(){
    let a=b;
    let b=a;
    let c=b; 
    let d=c;
    e=a+b+c+d;
    console.log(e)

} 
console.log(saludo3());

//loop for

let miArray = [1, 2, 3, 4, 5];

for (let i = 0; i < miArray.length; i++) {
    console.log("Elemento en la posición " + i + ": " + miArray[i]);
}

//Celsius a faranheit
function pasarde(Celsius) {
    let Fahrenheit = (Celsius * 9/5) + 32;
    return Fahrenheit;
}

let Celsius = 30;
let tFahrenheit = pasarde(Celsius);

console.log(Celsius + " grados Celsius equivale a " + tFahrenheit + " grados Fahrenheit.");
//pedir datos al user ejercicio completo
function celsiusToFahrenheit(gradosCelsius) {
    return (gradosCelsius * 9/5) + 32;
}

function fahrenheitToCelsius(gradosFahrenheit) {
    return (gradosFahrenheit - 32) * 5/9;
}

let conversion = prompt("Selecciona la conversión:\n1. De Celsius a Fahrenheit\n2. De Fahrenheit a Celsius \n");
let grados = parseFloat(prompt("Ingresa los grados  a convertir:"));


if (conversion === '1') {
    let resultado = celsiusToFahrenheit(grados);
    console.log(`${grados} grados Celsius equivalen a ${resultado} grados Fahrenheit.`);
} else if (conversion === '2') {
    let resultado = fahrenheitToCelsius(grados);
    console.log(`${grados} grados Fahrenheit equivalen a ${resultado} grados Celsius.`);
} else {
    console.log("Selección de conversión inválida. Por favor, selecciona 1 o 2.");
}
