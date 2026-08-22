// console.log('Hola js')

// TIPOS DE DATOS PRIMITIVOS (Number,String,Boolean,null,undefined,BigInt,Symbol)

// TIPOS DE DATOS NO PRIMITIVOS (Array(arreglos), Objects(Objetos), Function, Date)

// ARRAYS

// un arreglo puede contener cualquier tipo: cadenas, numeros ,booleans,null,arrays, objetos, etc

//DECLARACION

const arregloVacio=[]
const listaDeNumeros=[25,36,89,-99,15.60]
const listaDeValores =[1,2,3, 'Jhony',true,null,undefined]

console.log(arregloVacio)
console.log(listaDeNumeros)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeNumeros[0])
console.log(listaDeValores[3])
console.log(listaDeValores[55])  // undefined
console.log(listaDeValores[3]+' '+listaDeValores[2])

//Escritura en arreglo

// Añadir elementos

listaDeValores[7]='Cesar'
console.log(listaDeValores)
listaDeValores[6]= 2026
console.log(listaDeValores)


//Objeto
Object.freeze(listaDeValores)
listaDeValores[6]='Como estas'
console.log(listaDeValores)

// insertar elementos al final del arreglo (pusp)

const listaDeNombres=['Jhony','Cesar','Alejandro']
console.log(listaDeNombres)
listaDeNombres.push('Ricardo')
console.log(listaDeNombres)
listaDeNombres.push('Ramiro')
console.log(listaDeNombres)

// eliminar elementos del final de la lista (pop)

listaDeNombres.pop('Ramiro')
console.log(listaDeNombres)
listaDeNombres.pop()
console.log(listaDeNombres)

//Insertar un elemento de una posicion determinada (splice)
listaDeNombres.splice(0,0,'Pedro')
console.log(listaDeNombres)
listaDeNombres.splice(3,0,'Pepe')
console.log(listaDeNombres)

//Eliminar un elemento en una posicion determinada (splice)
listaDeNombres.splice(3,1)
console.log(listaDeNombres)

//Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)

// Obtener el ultimo elemento del arreglo
console.log(listaDeNombres[4-1])
console.log([listaDeNombres.length-1])
console.log(listaDeNombres.at(0))
console.log(listaDeNombres.at(-1))
console.log(listaDeNombres.at(-2))

// Otras funciones  - slice


//METODOS
// metodos de arreglos (INCLUDES, FILDER,MAP, SORT, FOREACH, REDUCE)

//METODO INCLUDES, SI EL VALOR SE PASA COMO PARAMETRO SE ENCUENTRA EN EL ARREGLO Y SIEMPRE DEVUELVE UN BOOLEAN (true o false)

const lenguajes=['javascript','php','python','C','c++','java', 'python']
console.log(lenguajes.includes('java'))
console.log(lenguajes.includes('visual'))

//filter  ----> nos ayuda a ubicar un elemento dentro de un arreglo usando una condicion y devuelve un nuevo arreglo con lo que encontron

const resultado=lenguajes.filter(function(item){
  //return item ==='python'
  // return item.includes('c') || item.includes('C')
  return item.toLocaleLowerCase().includes('c')
})
console.log(resultado)

// Metodo MAP  evalua un arreglo lo modifica y hay que pasarle una funcion. Noa devuelve un nuevo arreglo modificado. Siempre devuelve un nuevo arreglo

console.log(lenguajes)
const nombreConTituloespecial = lenguajes.map(function(lengua){
    // Logica para evaluar y modificar el arreglo
    //return 'hola'  
    return '*'+lengua+'*'

})
console.log(nombreConTituloespecial)
//Metodo SORF nos ayuda a ordenar un arreglo de elementos . Muta (cambia) el arreglo original. uder toSorted() en lugar de sort como recomendacion

//Metodo FOREACH nos ayuda recorrer un arreglo sin ningun retorno de datos
for(let index=0 ; index <10 ; index++){
    console.log(index)
}

const miArreglo=[]
lenguajes.forEach(function(lengua){ 
    console.log('#', lengua)
    miArreglo.push('El mejor '+ lengua)    
})
console.log(miArreglo)


// Metodo Reduce , nos ayuda a acumularb(sumar) los valores de un arreglo

const numeros = [3,40,100,7,50] //200
// con for

let sumatoria=0
 
for (i=0 ; i< numeros.length ;i++){
    sumatoria=sumatoria+numeros[i]
    
}
console.log(sumatoria)

const sumatoriaConReduce = numeros.reduce(function(acumulador,valoractual){
    return acumulador + valoractual
},0)
console.log(sumatoriaConReduce)

// OBJETOS
// Una forma de guaradr informacion en pares de clave:valor
// Un objeto sirve para agrupara datos en un solo lugar

/*
{
 KEY:VALUE,
 KEY2:VALUE2
 KEY3:VALUE3
}  


*/

const miObjetoVacio={}
console.log(miObjetoVacio)


const persona={
    nombre:'Jhony',
    edad: 45,
    esSoldado: true,
    "mi color favorito": "azul",
    coloresFavoritos:['rosado','rojo','celeste']

}

   
const persona2={
    nombre:'Cesar',
    edad:22,
    esProgramador:true
}

// Leer campos de un objeto(notacion de punto y de corchete)
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona2.esProgramador)
console.log(persona.estadoCivil)
console.log(persona.coloresFavoritos)
console.log(persona.coloresFavoritos[0])
console.log(persona["mi color favorito"])


