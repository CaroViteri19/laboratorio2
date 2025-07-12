/*Ejercicio 4: Calcular Promedio de Notas
- Plataforma educativa.
Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
(separadas por comas) y retorne el promedio (redondeado a 2 decimales).'*/

function calcularPromedio(notas) {
  const arregloNotas = notas.split(",").map(Number)
  
  const suma = arregloNotas.reduce((acc, nota) => acc + nota, 0);
  const promedio = suma / arregloNotas.length;

  return promedio.toFixed(2); 
}


const entrada = prompt("Ingresa tus notas separadas por comas:");
const resultado = calcularPromedio(entrada);
console.log("El promedio de tus notas es:", resultado);
