'use strict'
let librosLeidos = [];
const agregarLibro = function(titulo) {
    librosLeidos.push(titulo);
}

agregarLibro('Moby Dick');
agregarLibro('El principito')
agregarLibro('Cien años de soledad')
console.log(librosLeidos);

const mostrarLibrosLeidos = function(){
    console.log(librosLeidos.join('\n'));
}
mostrarLibrosLeidos();