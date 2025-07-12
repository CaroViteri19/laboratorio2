/*Ejercicio 8: Cambio de Moneda
-App de viajes.
Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
pedir al usuario monto en COP y la moneda con la que desea hacer la converción.'*/
function convertirMoneda(montoCOP, monedaDestino) {
  const tasaUSD = 0.00026;
  const tasaEUR = 0.00024;

  let resultado;

  if (monedaDestino === "USD") {
    resultado = montoCOP * tasaUSD;
    alert(`${montoCOP} COP son aproximadamente $${resultado.toFixed(2)} USD`);
  } else if (monedaDestino === "EUR") {
    resultado = montoCOP * tasaEUR;
    alert(`${montoCOP} COP son aproximadamente €${resultado.toFixed(2)} EUR`);
  } else {
    alert("Moneda no válida. Por favor usa USD o EUR.");
  }
}


const monto = parseFloat(prompt("Ingresa el monto en pesos colombianos (COP):"));
const moneda = prompt("¿A qué moneda deseas convertir? (USD o EUR)").toUpperCase();

convertirMoneda(monto, moneda);