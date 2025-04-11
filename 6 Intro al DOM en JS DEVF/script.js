// Paso 1: seleccionar los elementos
const inputComentario = document.getElementById('comentario');
const boton = document.getElementById('boton');
const listaComentarios = document.getElementById('listaComentarios');

// Paso 2: escuchar el clic del botón
boton.addEventListener('click', function() {
  // Paso 3: obtener el texto que escribió el usuario
const texto = inputComentario.value;

  // Paso 4: verificar que no esté vacío
if (texto !== '') {
    // Paso 5: crear un nuevo elemento para mostrar el comentario
    const nuevoComentario = document.createElement('p');
    nuevoComentario.textContent = texto;

    // Paso 6: agregar el comentario a la lista
    listaComentarios.appendChild(nuevoComentario);

    // Paso 7: agregar el botón de eliminar al comentario
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    nuevoComentario.appendChild(botonEliminar);

    // Paso 8: escuchar el clic en el botón de eliminar
    botonEliminar.addEventListener('click', function() {
        listaComentarios.removeChild(nuevoComentario);
    });

    // Paso 9: limpiar la caja de texto
    inputComentario.value = '';
} else {
    alert('Por favor, escribe un comentario antes de agregarlo.');
}
});