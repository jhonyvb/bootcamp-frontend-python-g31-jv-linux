console.log('Hola  que tal jhony')
console.log('65')
console.log(typeof 20)
console.log(-67)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)



// string
console.log('Jhony Verano')
let nombre="Cesar verano"
console.log(nombre)
console.log(typeof nombre)

// boolean


console.log(true)
console.log(false)

// underfined (no esta definido)
let x  //declaracion de una variable
console.log(x)
console.log(typeof x)

// null

//let nombre = null
//console.log(nombre)

console.log(typeof 10)
console.log(typeof "hola")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null) 

// variables

// const --> valores que no cambian

const pi=3.14
console.log(pi)

let edad = 20
console.log(edad)

edad=35
console.log(edad)

//operadadores matematicos

console.log(3+8)
console.log(5*4)
console.log(25/5)
console.log(25%4)  ///me da el residuo
console.log(16**2) // elavacion al cuadrado
console.log(Math.pow(16,2)) // forma antigua de elevar el cuadrado

//ejercicios
let a=10
let b=3
console.log(a%b)

// comparaciones

/// Igualdad debil ==

console.log(1=="1")  /// Solo compara valores

// Valores estrictos (Recomendacion debemos usarlo siempre)
console.log(1==="1") // aca si hace la comparacion exacta

// Operadores logicos (AND , OR , NEGACION)
console.log(true && false) // false
console.log(true || false) // true
console.log(!true) // false

//Ejercicio

let base=10
let altura = 5
let area = base*altura/2

console.log(area)

// concatenacion unir textos

let nombre2 = "Cesar"
let edad2 = 6
console.log("Hola " + nombre2+ ",tienes " +edad2+ "  años")
console.log(`Hola ${nombre2} como estas me dices q tienes ${edad2} años` )  // forma nueva  de concactenar  

// Conicionales

let numero1 = 4
if(numero1%2===0){  // Si la condicion es verdadera
    console.log("ES numero par")
}

let nota = 13

if(nota>=13){
    console.log("Aprobado")
}
else{
    console.log("Desaprobado")
}

let heroe= 'Spiderman'
if (heroe==='Bataman'){
    console.log('Hola soy bruce')
}else if(heroe==='Spiderman'){
    console.log('Hola soy Peter')

}
else if(heroe==='Ironman'){
    console.log('hOLa soy Tony')
}
else{
    console.log('No soy un heroe')
}

// Estroctura swich averiguar

let numero= Number(prompt("Ingrese un numero"))
if(numero%2===0 && numero>=10){
    console.log("par mayor que 10")
}else if(numero%2===0 && numero<=10){
    console.log("par y menor que 10")
}else{
    console.log("es imnpar")
}

let num=Number(prompt("Ingrese numero"))
if(num%3===0 &&num%5===0){
    console.log("fizzbuzz")
}
else if(num%3===0){
    console.log("fizz")
}
else if(num%5===0){
    console.log("buzz")
}
else{
    console.log(num)
}


function duplicador(num1){
   return num1*2
}

console.log(duplicador(25))

function numMayor(a,b){
    if (a>b){
        console.log('el nnumero mayor es: '+ a)
    }
    else{
        console.log('el numero mayor es:' +b)
    }
}
 
numMayor(30,60)

function fizzBuzz(numero) {
    
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } 
    
    else if (numero % 3 === 0) {
        return "fizz";
    } 
   
    else if (numero % 5 === 0) {
        return "buzz";
    } 
   
    else {
        return numero;
    }
}
console.log(fizzBuzz(15)); 

function evaluarTexto(texto){
    if (texto.length>10){
        return "El texto es Largo"
    }
    else{
        return "El texto es corto"
    }
}

console.log(evaluarTexto("hola"))
console.log(evaluarTexto("Pedropicapiedra"))

function invertirTexto(texto2){
    return texto2.split('').reverse().join('')
}

console.log(invertirTexto("hola"))