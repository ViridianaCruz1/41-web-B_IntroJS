'use strict'


const fruits = ["manzana", "plátano", "naranja", "manzana", "pera", "plátano", "naranja", "manzana", "uva"];
console.log(fruits);
const countingFruits = {};

// Recorrer el arreglo y contar las frutas
for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    if (countingFruits[fruits]) {
        countingFruits[fruits]++;  // Si ya existe en el objeto, incrementar el contador
    } else {
        countingFruits[fruits] = 1; // Si no existe, inicializar con 1
    }
}

for (let fruta in countingFruits) {
    console.log(`Conteo de frutas: ${countingFruits[fruta]}`);
}