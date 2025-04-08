'use strict'
// MANIPULACION DEL DOM, NO SE EJECUTA HASTA QUE SE CARGAN TODOS LOS ELEMENTOS DEL DOM
document.addEventListener('DOMContentLoaded', function(){

//DECLARACION DE VARIABLES 
const welcome = document.querySelector('.welcome'); //Mensaje de inicio
const form = document.querySelector('.login');      // Usuario, contrasena y boton
const user = document.querySelector('.login__input--user'); // Usuario
const pin = document.querySelector('.login__input--pin'); // Contrasena

const operations = document.querySelectorAll('.operation'); // Cajas de operaciones

//Botones de → de cada operacion
const balance = document.querySelector('.form__btn--balance');
const userBalance = document.getElementById('currentBalance'); // Contenido de la caja de saldo
const deposit = document.querySelector('.form__btn--deposit');
const withdraw = document.querySelector('.form__btn--withdraw');

//Cajas de info 
const balanceBox = document.querySelector('.info--balance');
const depositBox = document.querySelector('.info--deposit');
const withdrawBox = document.querySelector('.info--withdraw');

//Casillas para ingresar monto a depositar/retirar
const amountToDeposit = document.querySelector('.form__input--deposit');
const amountToWithdraw = document.querySelector('.form__input--withdraw');

//Botones de → para depositar/retirar
const buttonToDeposit = document.querySelector('.sendAmount__btn--deposit');
const buttonToWithdraw = document.querySelector('.sendAmount__btn--withdraw');

let attempts = 1;

// SE ESTABLECEN LOS 3 USUARIOS
const accounts = [
    {name: 'Diego Arsuaga', saldo: 7050, dateOfBirth:270400},
    {name: 'Emilio Ledezma', saldo:4500, dateOfBirth:220699},
    {name: 'Viridiana Cruz', saldo: 2300, dateOfBirth:160602},
];

//SE GENERAN LAS CONTRASENAS
accounts.forEach(account => {
    account.password = account.name
        .split(' ')
        .map(word => word.slice(0, 3).toLowerCase()) //diears
        .join('') + 
        String(account.dateOfBirth).slice(0, 4); //2704
}); //diears2704
console.log(accounts);


//DA ACCESO SI EL USUARIO Y LA CONTRASENA COINCIDEN
form.addEventListener('submit', function(e){
    e.preventDefault();

    const userName = user.value.trim();
    const userPin = pin.value.trim();

    const account = accounts.find(
        acc =>
            acc.name.toLowerCase() === userName.toLowerCase() 
        && acc.password === userPin
    );
    console.log(account);

    
    if(account && attempts < 3){
        let saldo = Number(account.saldo);

        alert(`Bienvenido, ${account.name}.`);
        welcome.textContent = (`Bienvenido/a, ${account.name}.`);
        user.value = '';
        pin.value = '';
        
        //Que aparezcan las opciones del menu
        operations.forEach(op => op.style.display = 'flex');

        //Muestra el saldo, pero se hace funcion porque se repite en todas las operaciones
        const showBalance = function(){
            balanceBox.style.display = 'flex';
            userBalance.textContent = `Tu saldo actual es $${saldo}`;
        }

        //Detonar accion cuando se seleccione CONSULTAR SALDO
        balance.addEventListener('click', function(e){
            e.preventDefault();
            showBalance();
        });

        //Detonar accion cuando se seleccione DEPOSITAR MONTO
        deposit.addEventListener('click', function(e){
            e.preventDefault();
            showBalance();
            depositBox.style.display = 'flex';

            buttonToDeposit.addEventListener('click', function(e){
                const toDeposite = Number(amountToDeposit.value);
                saldo += toDeposite;
                showBalance();
                // amountToDeposit.value = '';
                depositBox.style.display = 'none';
            });
        });

        //Detonar accion cuando se seleccione RETIRAR SALDO 
        withdraw.addEventListener('click', function(e){
            e.preventDefault();
            showBalance();
            withdrawBox.style.display = 'flex';

            buttonToWithdraw.addEventListener('click', function(e){
                const toWithdraw = Number(amountToWithdraw.value);
                saldo -= toWithdraw;
                showBalance();
                // amountToWithdraw.value = '';
                withdrawBox.style.display = 'none';
            })
        });

        attempts = 1;


    }else if(attempts < 3){
        // attempts ++;
        alert(`Usuario o contraseña incorrectos. Intenta nuevamente. \n
            Tienes ${3 - attempts} intentos`);
        attempts++;
    }else{
        console.log(attempts);
        alert(`Número máximo de intentos fallidos alcanzados.`);
        welcome.textContent = (`Plataforma bloqueada, comunicarse con atención a clientes`);
        form.style.display = 'none';
    }
});
});