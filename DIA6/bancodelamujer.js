class BankAccount {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
        return `Se depositaron ${cantidad}€ en la cuenta. Nuevo saldo: ${this.saldo}€`;
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            return `Se retiraron ${cantidad}€ de la cuenta. Nuevo saldo: ${this.saldo}€`;
        } else {
            return `Saldo insuficiente para retirar ${cantidad}€`;
        }
    }
}

const cuenta = new BankAccount("123456789", 1000);

console.log("¡Bienvenido a su cuenta bancaria!");
console.log(`Número de Cuenta: ${cuenta.numeroCuenta}`);
console.log(`Saldo actual: ${cuenta.saldo}€`);

const operacion = prompt("¿Desea depositar o retirar dinero? (Ingrese 'depositar' o 'retirar')");

if (operacion === 'depositar') {
    const cantidadDeposito = parseFloat(prompt("Ingrese la cantidad que desea depositar:"));
    console.log(cuenta.depositar(cantidadDeposito));
} else if (operacion === 'retirar') {
    const cantidadRetiro = parseFloat(prompt("Ingrese la cantidad que desea retirar:"));
    console.log(cuenta.retirar(cantidadRetiro));
} else {
    console.log("Operación no válida. Por favor, ingrese 'depositar' o 'retirar'.");
}

console.log("Gracias por utilizar nuestros servicios.");