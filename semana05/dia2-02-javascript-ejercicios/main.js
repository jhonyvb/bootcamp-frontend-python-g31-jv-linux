// Ejercicio 1: Contar vocales
// Retorna cuántas vocales contiene un texto dado, sin importar mayúsculas.

function contarVocales(texto) {
  let contador = 0
  let vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ'

  for (let letra of texto) {
    if (vocales.includes(letra)) {
      contador++
    }
  }

  return contador
}

console.log(contarVocales('Hola'))//2


  


// Ejercicio 2: Eliminar duplicados
// Elimina elementos duplicados de un array manteniendo el orden.


function eliminarDuplicados(arr = []) {
  let resultado = []

  for (let elemento of arr) {
    if (!resultado.includes(elemento)) {
      resultado.push(elemento)
    }
  }

  return resultado
}

// Ejercicio 3: Invertir texto
// Invierte una cadena de texto.

function invertirTexto(tex2){
  return tex2.split('').reverse().join('')
}
console.log(invertirTexto('hola'))

// Ejercicio 4: Sumar array
// Retorna la suma total de todos los números en un array.

function sumaArray(lista=[]){
  return lista.reduce(function(num,suma){
   return num+suma
  },0)

}
console.log(sumaArray([1,2]))//3

// Ejercicio 5: Celsius a Fahrenheit
// Convierte grados Celsius a Fahrenheit.

function convertirCF(celsius){
  let conversion=(celsius*9/5)+32
  return conversion
}

console.log(convertirCF(30))

// Ejercicio 6: Es palíndromo
// Retorna true si un texto es un palíndromo.
// Ignora espacios y mayúsculas.

function esPoliandro(text3){
  let textoPuro=text3.toLowerCase().replace(/[\s]/g,"")
  let textoInvertido=textoPuro.split("").reverse().join("")

  return textoPuro===textoInvertido
}

console.log(esPoliandro("ana"))


// Ejercicio 7: Elementos en común
// Retorna un array con los elementos en común entre dos arrays.
// Sin repetir.
function elementosEnComun(array1, array2) {
  
  let comunes = array1.filter(function(elemento) {
    return array2.includes(elemento)
  });

  
  return [new Set(comunes)]
}

// Pruebas:
const lista1 = [1, 2, 3, 4, 5, 2]
const lista2 = [3, 4, 5, 6, 7, 3]

console.log(elementosEnComun(lista1, lista2))

// Ejercicio 8: Mayor número
// Retorna el número más grande de un array de números.

function obtenerMayorNumero(numeros) {
  return Math.max(...numeros)
}
console.log(obtenerMayorNumero([5, 12, 3, 99, 42])) // Resultado: 99

// Ejercicio 9: Repetir texto
// Repite un texto N veces separados por espacio.

function repetirTexto(texto, n) {
  let resultado = []
  for (let i = 0; i < n; i++) {
    resultado.push(texto)
  }
  return resultado.join(" ")
}
console.log(repetirTexto("hola", 3)) // Resultado: "hola hola hola"

// Ejercicio 10: Capitalizar
// Convierte la primera letra de un texto en mayúscula.

function capitalizar(texto) {
  if (!texto) return ""
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}
console.log(capitalizar("javascript")) // Resultado: "Javascript"

// Ejercicio 11: Filtrar pares
// Retorna un nuevo array con solo los números pares.

function filtrarPares(numeros) {
  return numeros.filter(function(numero) {
    return numero % 2 === 0
  });
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6]))// Resultado: [2, 4, 6]

// Ejercicio 12: Contar palabras
// Cuenta cuántas palabras tiene una frase.

function contarPalabras(frase) {
  let palabras = frase.trim().split(/\s+/)
  return frase.trim() === "" ? 0 : palabras.length
}
console.log(contarPalabras("Hola mundo, ¿cómo estás?"))// Resultado: 4


// Ejercicio 13: Reemplazar palabra
// Reemplaza una palabra específica por otra.

function reemplazarPalabra(texto, palabraVieja, palabraNueva) {
  let regex = new RegExp(palabraVieja, "g")
  return texto.replace(regex, palabraNueva)
}
console.log(reemplazarPalabra("Me gusta el perro", "perro", "gato")) // Resultado: "Me gusta el gato"

// Ejercicio 14: Limpiar array
// Elimina todos los valores falsy de un array.

function limpiarArray(array) {
  return array.filter(Boolean)
}
console.log(limpiarArray([0, 1, false, 2, "", 3, null, "hola"])) // Resultado: [1, 2, 3, "hola"]

// Ejercicio 15: Generar rango
// Genera un array del 1 al número dado.

function generarRango(n) {
  let resultado = []
  for (let i = 1; i <= n; i++) {
    resultado.push(i)
  }
  return resultado
}
console.log(generarRango(5)) // Resultado: [1, 2, 3, 4, 5]

// Ejercicio 16: Carácter frecuente
// Retorna el carácter que más veces aparece.
// Ignora espacios.


function caracterFrecuente(texto) {
  let limpio = texto.replace(/\s/g, "")
  let conteo = {}
  let maxChar = ""
  let maxCount = 0

  for (let char of limpio) {
    conteo[char] = (conteo[char] || 0) + 1
    if (conteo[char] > maxCount) {
      maxCount = conteo[char]
      maxChar = char
    }
  }
  return maxChar
}
console.log(caracterFrecuente("programacion en javascript"))// Resultado: "r"
// Ejercicio 17: Contar ocurrencias
// Cuenta cuántas veces aparece cada palabra.


function contarOcurrencias(texto) {
  let palabras = texto.toLowerCase().match(/\b\w+\b/g) || []
  let conteo = {};

  for (let palabra of palabras) {
    conteo[palabra] = (conteo[palabra] || 0) + 1
  }
  return conteo
}
console.log(contarOcurrencias("hola mundo hola")) // Resultado: { hola: 2, mundo: 1 }


// Ejercicio 18: Obtener longitudes
// Retorna un array con las longitudes de cada palabra.

function obtenerLongitudes(palabras) {
  return palabras.map(function(palabra) {
    return palabra.length
  });
}
console.log(obtenerLongitudes(["casa", "programacion", "sol"])); // Resultado: [4, 12, 3]

// Ejercicio 19: Promedio array
// Calcula el promedio de un array de números.

function calcularPromedio(numeros) {
  if (numeros.length === 0) return 0
  let suma = numeros.reduce(function(acum, num) {
    return acum + num
  }, 0);
  return suma / numeros.length
}
console.log(calcularPromedio([10, 20, 30, 40])) // Resultado: 25

// Ejercicio 20: Texto a lista
// Convierte una cadena separada por comas en un array limpio.

function textoALista(texto) {
  return texto.split(",").map(function(item) {
    return item.trim();
  })
}
console.log(textoALista("manzana, pera,   uva  , naranja"))
// Resultado: ["manzana", "pera", "uva", "naranja"]
