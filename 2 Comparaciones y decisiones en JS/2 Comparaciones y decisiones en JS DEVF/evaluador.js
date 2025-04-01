'use strict'

const note = Math.floor(Math.random() * 101);
console.log(note);
// const note = 0;

if(note !== 0){
    if(note < 60){
        console.log(`El estudiante no aprueba, calificación: ${note}`);
    }else if(note >= 60 && note <= 74){
        console.log(`El estudiante aprueba con SUFICIENTE, calificación: ${note}`);
    }else if(note >= 75 && note <= 89){
        console.log(`El estudiante aprueba con BIEN, calificación: ${note}`);
    }else{
        console.log(`El estudiante aprueba con EXCELENTE, calificación: ${note}`);
    }
}else{
    console.log('Calificacion inválida');
}