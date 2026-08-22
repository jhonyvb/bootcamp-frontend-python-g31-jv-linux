function contarVocales(texto) {
  let contador = 0;
  let vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';

  for (let letra of texto) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}
console.log(contarVocales('Hola'))//2

function eliminarDuplicados(arr = []) {
  let resultado = [];

  for (let elemento of arr) {
    if (!resultado.includes(elemento)) {
      resultado.push(elemento);
    }
  }

  return resultado;
}