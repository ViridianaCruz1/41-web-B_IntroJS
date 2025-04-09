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
const lastMovement  = document.getElementById('lastMovement'); // Renglon con la info del ultimo movimiento
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
    {name: 'Viridiana Cruz', saldo: 230, dateOfBirth:160602},
    {name: 'Diego Arsuaga', saldo: 705, dateOfBirth:270400},
    {name: 'Emilio Ledezma', saldo:450, dateOfBirth:220699},
];

//SE GENERAN LAS CONTRASENAS
accounts.forEach(account => {
    account.password = account.name
        .split(' ')
        .map(word => word.slice(0, 3).toLowerCase()) //vircru
        .join('') + 
        String(account.dateOfBirth).slice(0, 4); //1606
}); //vircru1606
console.log(accounts);


//DA ACCESO SI EL USUARIO Y LA CONTRASENA COINCIDEN
form.addEventListener('submit', function(e){
    e.preventDefault();

    balanceBox.style.display = 'none';
    depositBox.style.display = 'none';
    withdrawBox.style.display = 'none';
    

    const userName = user.value.trim();
    const userPin = pin.value.trim();

    const account = accounts.find(
        acc =>
            acc.name.toLowerCase() === userName.toLowerCase() 
        && acc.password === userPin
    );
    console.log(account);

    
    if(account && attempts <= 3){
        let saldo = Number(account.saldo);

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
                if(toDeposite>=0){
                    saldo += toDeposite;
                    if(saldo<=990){
                        depositBox.style.display = 'none';
                        amountToDeposit.value = '';
                        showBalance();
                        lastMovement.textContent = `Último movimiento: DEPÓSITO DE $${toDeposite}`
                    }else{
                        lastMovement.textContent = `Último movimiento: ABORTADO`
                        amountToDeposit.value = '';
                        saldo -= toDeposite;
                        alert('Tu movimiento incumple con las reglas del negocio')
                    }
                }else{
                    alert(`Ingresaste una cantidad inválida`)
                }
            });
        });

        //Detonar accion cuando se seleccione RETIRAR SALDO 
        withdraw.addEventListener('click', function(e){
            e.preventDefault();
            showBalance();
            withdrawBox.style.display = 'flex';

            buttonToWithdraw.addEventListener('click', function(e){
                const toWithdraw = Number(amountToWithdraw.value);
                if(toWithdraw>=0){
                    saldo -= toWithdraw;
                    if(saldo>=10){
                        withdrawBox.style.display = 'none';
                        amountToWithdraw.value = '';
                        showBalance();
                        lastMovement.textContent = `Último movimiento: RETIRO DE $${toWithdraw}`
                    }else{
                        lastMovement.textContent = `Último movimiento: ABORTADO`
                        amountToDeposit.value = '';
                        saldo += toWithdraw;
                        alert('Tu movimiento incumple con las reglas del negocio')
                    }
                }else{
                    alert(`Ingresaste una cantidad inválida`)
                }
            })
        });
        
        attempts = 1;
        
    }else if(attempts < 3){
        alert(`Usuario o contraseña incorrectos. Intenta nuevamente. \n
            Tienes ${3 - attempts} intentos`);
        attempts++;
        console.log(attempts);
    }else{
            alert(`Número máximo de intentos fallidos alcanzados.`);
            welcome.textContent = (`Plataforma bloqueada, comunicarse con atención a clientes`);
            form.style.display = 'none';
        }
    });
});