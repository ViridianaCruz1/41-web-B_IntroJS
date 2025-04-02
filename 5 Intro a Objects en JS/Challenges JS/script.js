'use strict'
///////////////////////////////////////////////////////////////////////////
//CHALLENGE #1: 'HOLA, FUNCION'
//Crea una función llamada getGreeting() que reciba un nombre como argumento y devuelva un saludo en forma de string. Luego, imprime el resultado en la consola.

//const name = prompt('Ingresa tu nombre: ');
const getGreeting = function(name){
    console.log(`Hola, ${name}! Bienvenido al mundo de JS `);
}
//getGreeting(name);
console.log('CHALLENGE #1:');
getGreeting('Viridiana');
getGreeting('Diego');
getGreeting('Karen');
console.log(' ');

///////////////////////////////////////////////////////////////////////////
//CHALLENGE #2: 'PAR O IMPAR'
//Crea una funcion llamada esPar() que reciba un número como argumento y devuelva true si es par y false si es impar
const esPar = function(number){
    if(number%2 === 1){
        console.log(false);
        return false;
    }else{
        console.log(true);
        return true;
    }
}

console.log('CHALLENGE #2:');
console.log('Prueba de par o impar con 4');
esPar(4);
console.log('Prueba de par o impar con 19');
esPar(19);
console.log('Prueba de par o impar con 1');
esPar(1);
console.log('Prueba de par o impar con 200002');
esPar(200002);
console.log(' ');

///////////////////////////////////////////////////////////////////////////
//CHALLENGE #3: 'FIZZBUZZ BÁSICO'
//Escribe una función llamada fizzBuzz() que reciba un número y muestre en consola los números del 1 hasta ese número, pero con estas reglas:
//1. Si el número es múltiplo de 3, imprime 'Fizz'
//2. Si es múltiplo de 5, imprime 'Buzz'
//3. Si es múltiplo de ambos, imprime 'FizzBuzz'
const fizzBuzz = function(numberFizzBuzz){
    for(let i=1; i<=numberFizzBuzz; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log('FizzBuzz');
        }else if(i%3 === 0){
            console.log('Fizz');
        }else if(i%5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
}

console.log('CHALLENGE #3: ');
console.log('Prueba del programa FizzBuzz con "17"');
fizzBuzz(17);
console.log(' ');

///////////////////////////////////////////////////////////////////////////
//CHALLENGE #4: EL MAYOR DE DOS NÚMEROS
//Escribe una función llamada mayorNumero() que reciba dos números como argumentos y devúelva el mayor de ellos. Si son iguales, devuelve un mensaje indicando que son iguales
const mayorNumero = function(a, b){
    if(a>b){
        console.log(a);
        return a
    }else if(b>a){
        console.log(b);
        return b;
    }else{
        console.log('Los números son iguales');
    }
}

console.log('CHALLENGE #4:');
console.log('Devulve el mayor de los números (12, 4)');
mayorNumero(12, 4);
console.log('Devulve el mayor de los números (65, 176)');
mayorNumero(65, 176);
console.log('Devulve el mayor de los números (33, 33)');
mayorNumero(33, 33);
console.log(' ');

///////////////////////////////////////////////////////////////////////////
//CHALLENGE #5: HORAS TRABAJADAS
//Crea un programa que solicita las horas trabajadas de una persona, calcula su salario y determina si es acreedor a un aumento del 13%
//1. Se solicita el número de horas trabajadas y el salario por hora
//2. Si el trabajador ha trabajado más de 40 horas a la semana, es acreedor al aumento del 13%
//3. Se muestra el salario original y el salario con aumento (si aplica)
const calcularAumento = function(horasPorSemana, salarioPorHora){
    let salarioNuevo;
    if(horasPorSemana > 40){
        salarioNuevo = Math.ceil(salarioPorHora*1.13);
        console.log('Felicidades, eres acreedor a un aumento');
        console.log(`Tu salario anterior era de $${salarioPorHora}, tu salario actual será $${salarioNuevo}`);
    }else{
        console.log('No eres candidato a un aumento');
    }
};

console.log('CHALLENGE #5:');
console.log('Calcular aumento para alguien que trabaja 35 horas y gana $150 por hora');
calcularAumento(35, 150);
console.log('Calcular aumento para alguien que trabaja 45 horas y gana $200 por hora');
calcularAumento(45, 200);
console.log(' ');

///////////////////////////////////////////////////////////////////////////
//CHALLENGE #6: FIBONACCI
//Imprimir toda la serie de Fibonacci hasta n (iterativo)
const fibonacci = function(n){
    let penultimo = 0;
    let ultimo = 1;
    for(let index=0; index<n; index++){  
        console.log(penultimo);
        [penultimo, ultimo] = [ultimo, penultimo+ultimo];
    }
}

console.log('CHALLENGE #6:');
console.log('Prueba la serie de Fibonacci hasta "6" cifras');
fibonacci(6);
console.log(' ');

///////////////////////////////////////////////////////////////////////////
//CHALLENGE #6: CLASIFICAR UN TRIÁNGULO
//Crea una función que recibe las longitudes de los 3 lados de un triángulo como parámetros y devuelva la clasificación del triángulo según sus lados
//1. Verifica que los datos sean mayores a 0
//2. Compara los lados

const triangle = function(lado1, lado2, lado3){
    if(typeof(lado1)==='number' && typeof(lado2)==='number' && typeof(lado3)==='number'){
        if(lado1 === lado2 && lado2 === lado3){
            console.log('Triángulo EQUILÁTERO');
        }else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
            console.log('Triángulo ISÓCELES');
        }else{
            console.log('Triángulo ESCALENO');
        }
    }else{
        console.log('Tipo de dato inválido');
    }
}

console.log('CHALLENGE #7:');
console.log('Clasificar triángulo con estos datos: 15, 15, 12');
triangle(15, 15, 12);
console.log('Clasificar triángulo con estos datos: 4, 4, 4');
triangle(4, 4, 4);
console.log('Clasificar triángulo con estos datos: a, 8, 15');
triangle('a', 8, 15);
console.log('Clasificar triángulo con estos datos: 5, 17, 9');
triangle(5, 17, 9)