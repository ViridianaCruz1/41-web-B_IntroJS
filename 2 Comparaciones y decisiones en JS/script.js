//EJERCICIO VACUNAS
//Para que yo me pueda vacunar, necesito cumplir alguno de los siguientes requisitos:

//  1) Mayores de 18 años que residen en un municipio fronterizo del norte del país (Baja California, Sonora, Chihuahua, Coahuila, Nuevo León y Tamaulipas)
const estado = prompt('Ingrese el estado en el que resides (iniciando con mayúscula): ');
const edad = Number(prompt('Ingrese su edad: '));

//  2) Emabarazadas mayores de 18 años con más de 9 semanas de gestación
const gender = prompt('Ingrese su sexo (H/M): ');
let semanas;
let pregnancy;
if(gender === 'M'){
    pregnancy = prompt('¿Se encuentra embarazada? (Y/N): ');
    if(pregnancy === 'Y'){
        semanas = Number(prompt('¿Cuántas semanas tiene de gestación?'));
    }
}

//  3) Personas que cumplen 30 años o más este año
let treinta;
if(edad === 29){
    treinta = prompt('¿Cumples 30 este año? (Y/N)');
}

//Condiciones
if(edad>18 && (estado==='Baja California' || estado==='Sonora' || estado==='Chihuahua' || estado==='Coahuila' || estado==='Nuevo León' || estado==='Tamaulipas')){
    console.log('PUEDES VACUNARTE');
}else if (edad>18 && semanas>=9){
    console.log('PUEDES VACUNARTE');
}else if(edad>30 || treinta==='Y'){
    console.log('PUEDES VACUNARTE');
}else{
    console.log('NO PUEDES VACUNARTE');
};

//EJERCICIO PIEDRA, PAPEL O TIJERAS
//Piedra = 1
//Papel = 2
//Tijera = 3
//Piedra > Tijera > Papel > Piedra

const player1 = Math.ceil(Math.random() * 3);
if(player1===1){
    console.log('P1: Piedra');
}else if(player1===2){
    console.log('P1: Papel');
}else if(player1===3){
    console.log('P1: Tijera');
};

const player2 = Math.ceil(Math.random() * 3);
if(player2===1){
    console.log('P2: Piedra');
}else if(player2===2){
    console.log('P2: Papel');
}else if(player2===3){
    console.log('P2: Tijera');
};

if(player1>player2 || (player1===3 && player2===1)){
    console.log('PLAYER 1 WINS');
}else if(player2>player1 || (player2===3 && player1===1)){
    console.log('PLAYER 2 WINS');
}else if(player1 === player2){
    console.log('BOTH WIN');
}else{
    console.log('ERROR');
};