/*Ejercicio 5: Filtrar Usuarios por Edad
- Red social.
Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
cumplen con tener más de 18.'*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function filtrarUsuarios(usuarios, edadMinima) {
  return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

const usuarios = [
  { nombre: "Ana", edad: 15 },
  { nombre: "Carolina", edad: 30 },
  { nombre: "Hanz", edad: 30 },
  { nombre: "Ramon", edad: 15 }
];

rl.question("Ingresa la edad mínima: ", (respuesta) => {
  const edadMinima = parseInt(respuesta);
  const resultado = filtrarUsuarios(usuarios, edadMinima);

  console.log(`Usuarios con edad mayor o igual a ${edadMinima}:`);
  resultado.forEach(usuario => {
    console.log(`${usuario.nombre} (${usuario.edad} años)`);
  });

  rl.close();
});
