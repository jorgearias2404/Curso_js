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

 //estructura de control switch
//   switch(expresion)
//   {
//    case Valor1:
//     //codigo a ejecurar en caso de expresion sea igual a 
//     //valor1
//     break;
//    case Valor2:
//      //codigo a ejecutar
//    break;
//    default:

//    //codigo default
//    break;
//   }
let Expresion = "Papaya"
switch(Expresion)
{
    case "Naranja":
   console.log("Las naranjas cuestan 20");
    break;
    case "Aguacate":
        console.log("Las Aguacates cuestan 20");
         break;
 
 case "Peras":
   console.log("Las Peras cuestan 20");
    break;

 case "Papaya":
    console.log("Conseguiste la papaya");
     break;
     default:
        console.log("No hay frutas disponibles");
        break;
}


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

//CICLOS
//for
//  for(variable;condicion;incremento){
//   sucede el codigo
//  }

// for of (se puede con arrays o strings)
// for (variable of objeto)
// {
//     sucede codigo
// }
// let arreglo;
//  for(elemento_del_arreglo of arreglo)
//  {
//     console.log(elemento_del_arreglo);
//  }


//for in (sirve para iterar sobre objetos)

// for(variable in objeto)
// {

// }
//esto se lee que por cada propiedad del OBJETO 
//  se ejecuta el codigo dentro del for in


//while
//while(condicion)
// {
//     sucede el codigo
// }

//do while
//do{
//  sucede el codigo
// }while(condicion)


//ANATOMIA DE UNA FUNCION 

// function suma (a , b)
// {
//   return a+b;

// }
// console.log(suma(7,3));

//un metodo es una funcion que pertenece a un objeto 

//funciones puras e impuras

//funcion pura dada una misma entrada obtenemos una misma salida

//ARROW FUNCTION Y LEXICAL BINDING
const saludo =function(name)
{
    return `Hi, ${name}`
}
//arrow function
const Newsaludo = (name) => `Hi, ${name}`

//lexical binding
const user = {
    name: 'Juan'
    , edad: 25
    , saludo: function(mensaje)
    {
        console.log(`Hola soy, ${user.name}, y el mensaje para decirte es: ${mensaje}`) 
    }
} 

user.saludo("Tengo hambre")

//scope chain contextos de ejecucion
//      scopre  hosting  reasignable? Redeclarable?
// var  funcion   si         si            si
//let   bloque    no         si            no
//const bloque    no         no            no

//conceptos de array


  //arreglo vacio
 const EmprtyArray = []  

 //arreglo con el =numero cuatro adentro
 const array = [4]



 //accediendo a arrays
 const canasta = ['Apple', 'Banana', 'Orange']
 console.log(canasta[0]) //Apple
 console.log(canasta[1]) //Banana
 console.log(canasta[2]) //Orange
 //MUTABILITY
 canasta.push('Calabaza')//ingresa un nuevo elemento al arreglo
 canasta.pop()//saca el ultimo elemento del arreglo y si se desea se guarda
 //INMUTABILITY
 const NEWfRUITS = canasta.concat(['uvas','kiwi'])//concatenamos un arreglo
 //cheking arrays
 const Arr = Array.isArray(canasta)
 //map y for each
 //map opera a todos los elementos del arreglo y puede almacenar el resultado de la operacion
 const number=[2,3,4,5,]
 const doubleNumber = number.map(num => num*2)
 console.log(number)
 console.log(doubleNumber)

 //for each opera a todos los elementos del areweglo sin almacenarlos
 const colors=['red','pink','blue']
 const iterateColors =colors.forEach(color=>console.log(color))

 console.log(colors)
 console.log(iterateColors)

 //FILTER Y REDUCE
 //filter
 const numbers = [1, 2, 3, 4, 5, 6]
 const evenNumbers = numbers.filter(num => num % 2 === 0)
 console.log(numbers)
 console.log(evenNumbers)

 //REDUCE
const Numbersreduce =[1,2,3,4,5,]
const sumNumbers = Numbersreduce.reduce((accumalator,current)=>accumalator+current, 0)
console.log(Numbersreduce)
console.log(sumNumbers)

//ejemplo 2
const words = ['palabra1','palabra2','palabra3','palabra1']
const wordsFrequency = words.reduce((accumalator,current) => 
{
  if(accumalator[current])
  {
    accumalator[current]++
  }
  else
  {
    accumalator[current]=1
  }
  return accumalator
},{} )
console.log(words)
console.log(wordsFrequency)


//FIND findindex()
//find retorna el rpimer elemento que cumpla la condicion
const firstNumberGreaterThan10 =[5,10,15,2,3]
const firstNumberGreaterThan10find = firstNumberGreaterThan10.find(num => num > 10)
console.log(firstNumberGreaterThan10)
console.log(firstNumberGreaterThan10find)

//find index nos devuelve el indice del elemento que satisfaga la condicion
const RandomNumber =[6,10,11,20,23,70]
const indexRandom = RandomNumber.findIndex(num=> num>=70)

console.log(RandomNumber);
console.log(indexRandom);

//SLICE
//slice devuelve un nuevo arreglo con los elementos del arreglo original es decir los copias
const animals = ['ant,','snake', 'camel','elephant','lion']
console.log(animals.slice(1,2))
console.log(animals.slice(2,5))
console.log(animals.slice(-2))

//spreed operator
// copiando un arreglo
const arregloOriginal = [1,2,3,4,5]
const arregloCopia = [...arregloOriginal]
const arreglo1 = [1,2,3,4]
const arreglo2 = [5,6,7,8]
const combinacion = [...arreglo1,...arreglo2]
console.log(combinacion);

console.log(arregloOriginal)
console.log(arregloCopia)


//ANATOMIA DE UN OBJETO

//CONSTRUCTOR

    

 function Persona (nombre,apellido,edad){
  this.nombre=nombre
  this.apellido=apellido
  this.edad=edad
 }
 //HACIENDO USO DE INSTANCIAS
 const persona1 = new Persona('Pepito','Perez',25)
 console.log(persona1)
 const persona2 = new Persona('Alfonso','Gutierrez',50)
 console.log(persona2)

 //CLASES
 class ClasePersona{
 
    constructor(Nombre,Edad) //debe ser siempre minuscula
    {
       this.nombre =Nombre
       this.edad = Edad
    }
    saludar()
    {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`);
        
    }
 
};
 
const Juan = new ClasePersona("Juan",23);
Juan.saludar();

//OBJETOS, HERENCIAS Y PROTOTIPOS
class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido()
    {
        console.log('El animal emite un sonido')
    }
}
class Perro extends Animal{//asi recibe los elementos por herencia
    constructor(nombre,tipo,raza){
        super (nombre,tipo);//llama al constructor de la clase animal y adentro definimos quie atributos de la clase padre se van a usar
        this.raza =raza
    }
}