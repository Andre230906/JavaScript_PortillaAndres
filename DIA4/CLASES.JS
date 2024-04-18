class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`El coche ${this.marca} ${this.modelo} está acelerando.`);
    }
}

class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrarInfo() {
        console.log(`El libro "${this.titulo}" fue escrito por ${this.autor}.`);
    }
}

class Numero {
    constructor(valor) {
        this.valor = valor;
    }

    duplicar() {
        return this.valor * 2;
    }
}

function suma(a, b) {
    return a + b;
}

const persona1 = new Persona('Juan', 30);
persona1.saludar();

const coche1 = new Coche('Toyota', 'Corolla');
coche1.acelerar();

const libro1 = new Libro('El principito', 'Antoine de Saint-Exupéry');
libro1.mostrarInfo();

const numero1 = new Numero(5);
console.log('El doble de', numero1.valor, 'es', numero1.duplicar());

const resultado = suma(3, 4);
console.log('La suma de 3 y 4 es:', resultado);