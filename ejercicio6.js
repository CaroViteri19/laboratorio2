/*Ejercicio 6: Contador de Palabras
-Editor de texto.
Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por
espacios).'*/

function contarPalabras(texto) {
  const palabras = texto.trim().split(/\s+/);
  return palabras.length;
}


const texto = process.argv.slice(2).join(" ");
const cantidad = contarPalabras(texto);

console.log("Cantidad de palabras:", cantidad);