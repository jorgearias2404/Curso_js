console.log("-----INICIO PRACTICAS-------")

/*ANOTOMIA DE UNA VARIABLE */
let caja = "Es mi nombre";
let Numeros = 1234;
const SoyUnaVariableConstante = 243;

/*TIPOS DE DATOS */
/* PRIMITIVOS*/ 

//string
let nombre = "Juan";
let string1 = "Pepito estudia"
let string2 = 'Pepito sigue estudiando'
let string3 =`${string1} esta feliz juntoa ${string2}`
let string4 = nombre+ " y " + string1 
console.log(string4.length);
console.log(string4.toLocaleLowerCase());
console.log(string4.toLocaleUpperCase());
console.log(string4.substring(0,5));
console.log(string4);

//number
//1.-tipo entero y decimal

    let entero = 25;
    let decimal = 25.5;
//2.- Notacion cientifica
    const cientifico =2;

//3.- Infinitos y NaN
    const Infinitos =Infinity;
    const NoesunNumero = NaN;
    //OPERACIONES ARITMETICAS
    //1.- suma resta multioplicacion y division
    const suma=3+4;
    const resta=4-4;
    const multiplicacion=4*4;
    const division=4/4;
    //2.- Modulo y Exponenciacion
    const modulo=4%4;
    const exponenciacion=4**4;
    //PRECISION
    const Resultado =0.1 + 0.2;
    console.log(Resultado)
    console.log(Resultado.toFixed(1))

    //OPERACIONES AVANZADAS
    const Raizcuadrada = Math.sqrt(16);
    const ValorAbsoluto = Math.abs(-3);
    const ValorRandom = Math.random();

    console.log(Raizcuadrada)
    console.log(ValorAbsoluto)
    console.log(ValorRandom)
//bool
let estaCasado = false;
//OPERADORES DE COMPRACION
 //  ==  compara si es igual al valor
 //   === compara si es igual al valor y al tipo de dato
 //  =! (AL REVES) no permite preguntar su los valores son diferenes
 //   ==! compara si es diferente al valor y diferente al tipo de dato
 //  ><= compara si es menor mayor o igual
 // && compara valores
 // || uno o otro'
 //  "!" negacion

 //ESTRUCTURAS DE CONTROL
 if(Raizcuadrada>=ValorAbsoluto)
 {
    console.log("La raiz de 16 es mayor que el absoluto de -3")
 }
 else{
    console.log("La raiz de 16 es menor que el absoluto de -3 que raro xd")
 }
 const a=10
 const b=20
 const c="10"

 a==b
//null
let estaCasado2 = null;
//undefind
let noDefinido =undefined;
//symbol
let simbolo = Symbol("mi simbolo");
//bigint
let NumeroGrande = 2n;


/*COMPLEJOS*/
//object
let carro = {
    marca: "Tesla",
    modelo: "Modelo 3"
    
}
//array
let frutas = ["manzana","peras","uvas"];
//function
function saludar(){}


 
