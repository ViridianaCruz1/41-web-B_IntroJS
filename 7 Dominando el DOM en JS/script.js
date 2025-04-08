'use strict'
const caracteresButton = document.querySelector('.passwordGenerator');
const caracteres = document.querySelector('.passwordLength');

let longitud;
caracteresButton.addEventListener('click', function(e){
    e.preventDefault();
    longitud = caracteres.value;
    console.log(caracteres.value);
    caracteres.value = '';
    if(longitud >= 8 && longitud <= 20){
        generarContraseña()
    }else{
        alert('Respeta el rango de carácteres (8-20)');
    }
})

function generarContraseña() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+}{[]?></=';
    let contraseña = '';
    
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indiceAleatorio);
    }
    
    document.getElementById('passwordDisplay').textContent = contraseña;
}

