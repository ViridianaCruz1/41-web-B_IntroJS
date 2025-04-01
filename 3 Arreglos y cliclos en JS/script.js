//CAJERO AUTOMÁTICO
//El saldo inicial de la cuenta es de $1000
let saldo = 1000;
let historial = [];
//El usuario puede ingresar un monto a retirar
const retiro = prompt('Ingrese el monto a retirar: ');
//Se verifica si el monto solicitado es menor o igual al saldo disponible
if(retiro <= saldo){
    //Si el monto es válido, se realiza la transacción y se actualiza el saldo
    //Si el monto es válido, se realiza la transacción y se actualiza el saldo
    saldo = saldo - retiro;
    //Se informa al usuario del nuevo saldo disponible
    console.log(`Su saldo actualizado es: $${saldo}`);
}else{
    //Si el monto es mayor al saldo disponible, se informa al usuario que la operacion no puede realizarse por falta de fondos
    console.log('No se puede realizar la transacción. Saldo  insuficiente');
};