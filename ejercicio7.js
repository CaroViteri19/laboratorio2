/*Ejercicio 7: Simulador de Cajero Automático
-App bancaria.
Crea una función retirarDinero(saldo, monto) que:
Pide al usuario su saldo actual y el monto a retirar.
Muestra el nuevo saldo o "Fondos insuficientes"'*/

function retirarDinero(saldo, monto) {
  if (monto > saldo) {
    console.log("Fondos insuficientes");
  } else {
    const nuevoSaldo = saldo - monto;
    console.log("Retiro exitoso. Nuevo saldo: $" + nuevoSaldo.toFixed(2));
  }
}


const args = process.argv.slice(2); 
const saldo = parseFloat(args[0]);
const monto = parseFloat(args[1]);


console.log("Saldo actual: $" + saldo.toFixed(2));
console.log("Monto a retirar: $" + monto.toFixed(2));

retirarDinero(saldo, monto);