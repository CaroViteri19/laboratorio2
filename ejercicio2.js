/*Ejercicio 2: Validar Contraseña
- Formulario de registro.
Crea una función validarContraseña(contraseña) que retorne true si:
- Tiene al menos 8 caracteres.
- Incluye un número.
- Incluye una mayúscula.

'*/

function validarContraseña(contraseña){
    const caracteres = contraseña.length >=8 
    if (caracteres){
        console.log("La contraseña contiene 8 caracteres.", true); 
    } else
        console.log("La contraseña debe tener almenos 8 caracteres.", false);
    const contieneNumero = /\d/.test(contraseña);
    if (contieneNumero){
        console.log("La contraseña contiene al menos un número.", true); 
    } else
        console.log("La contraseña no contiene numero.", false);

    const mayuscula = /[A-Z]/.test(contraseña);
     if (mayuscula){
        console.log("La contraseña contiene una mayuscula.", true); 
    } else
        console.log("La contraseña debe tener almenos una mayuscula.", false);  

}
validarContraseña("clave123"); 

console.log(validarContraseña);
