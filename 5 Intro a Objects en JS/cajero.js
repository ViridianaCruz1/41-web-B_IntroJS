// 1. Declarar variables
let saldo = 1000;
let historial = [];
let instentosFallidos = 0;

// 2. Funcion para consultar saldo
function getSaldo(){
    console.log(`Tu saldo actual es: $${saldo}`);
    alert(`Tu saldo actual es: $${saldo}`);
};

//3. Funcion para realizar retiro
function retirarSaldo(){
    if(instentosFallidos >= 3){
        alert(`Has excedido el numero maximo de intentos fallidos`)
    }

    if(isNaN(monto) || monto <= 0){
        alert('Monto invalido. Por favor, ingrese un monto valido');
        return;
    }
    
    saldo += monto;
    historial.push(`Retiro de ${monto}`);
    console.log(`Transaccion exitosa. Has retirado $${monto}, tu nuevo saldo es de $${saldo}`);
    alert(`Transaccion exitosa. Has retirado $${monto}, tu nuevo saldo es de $${saldo}`);
};


//4. 
if(isNaN(monto) || monto <= 0){
    alert('Monto invalido. Por favor, ingrese un monto valido');
    return;
}

saldo += monto;
historial.push(`Retiro de ${monto}`);
console.log(`Transaccion exitosa. Has retirado $${monto}, tu nuevo saldo es de $${saldo}`);
alert(`Transaccion exitosa. Has retirado $${monto}, tu nuevo saldo es de $${saldo}`)

//5. Creacionde menu inetractivo para el usuario
function menu(){
    let option;
    do{
        option = prompt(

        );
        switch(option){
            case "1":
                getSaldo();
                break;
                case "2":
                    
        }

    }
    while()
}