class Persona {
    constructor(nombre, edad, tarjeta) {
        this.nombre = nombre;
        this.edad = edad;
        this.tarjeta = tarjeta;
        this.piel = piel;

    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, País: ${this.tarjeta} y su color de piel es: ${this.piel}`);
    }
}

const persona1 = new Persona("Porti", 17, "1141114782", "moreno");
const persona2 = new Persona("kenia", 18, "1098386400", "blanca");

persona1.mostrarDetalles();
persona2.mostrarDetalles();