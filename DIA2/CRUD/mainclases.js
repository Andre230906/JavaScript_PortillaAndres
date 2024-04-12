class Camper {
    constructor(id, nombres, apellidos, direccion, acudiente, telefonos, estado, riesgo) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.acudiente = acudiente;
        this.telefonos = telefonos;
        this.estado = estado;
        this.riesgo = riesgo;
    }
}

class Trainer {
    constructor(nombre, rutaAsignada, horario) {
        this.nombre = nombre;
        this.rutaAsignada = rutaAsignada;
        this.horario = horario;
    }
}

class Ruta {
    constructor(nombre, modulos, capacidadMaxima, sgdbPrincipal, sgdbAlternativo) {
        this.nombre = nombre;
        this.modulos = modulos;
        this.capacidadMaxima = capacidadMaxima;
        this.sgdbPrincipal = sgdbPrincipal;
        this.sgdbAlternativo = sgdbAlternativo;
        this.campersAsignados = [];
    }
}

class Coordinador {
    constructor() {
        this.campers = [];
        this.trainers = [];
        this.rutas = [];
    }

    registrarCamper(camper) {
        this.campers.push(camper);
    }

    registrarTrainer(trainer) {
        this.trainers.push(trainer);
    }

    crearRuta(nombre, modulos, capacidadMaxima, sgdbPrincipal, sgdbAlternativo) {
        this.rutas.push(new Ruta(nombre, modulos, capacidadMaxima, sgdbPrincipal, sgdbAlternativo));
    }

    asignarCamperARuta(camperId, ruta) {
        const selectedRuta = this.rutas.find(r => r.nombre === ruta);
        if (selectedRuta) {
            if (selectedRuta.campersAsignados.length < selectedRuta.capacidadMaxima) {
                selectedRuta.campersAsignados.push(camperId);
                return true;
            } else {
                console.log("¡La ruta está llena!");
                return false;
            }
        } else {
            console.log("¡Ruta no encontrada!");
            return false;
        }
    }

    listarCampersPorEstado(estado) {
        return this.campers.filter(camper => camper.estado === estado);
    }

    listarCampersConRendimientoBajo() {
        return this.campers.filter(camper => camper.riesgo === "Alto");
    }

    listarCampersAsociadosARuta(ruta) {
        const selectedRuta = this.rutas.find(r => r.nombre === ruta);
        if (selectedRuta) {
            return this.campers.filter(camper => selectedRuta.campersAsignados.includes(camper.id));
        } else {
            console.log("¡Ruta no encontrada!");
            return [];
        }
    }

    listarTrainers() {
        return this.trainers;
    }
}

const coordinador = new Coordinador();

const camper1 = new Camper(1, "Juan", "Perez", "Calle 123", "Ana", { celular: "123456789", fijo: "987654321" }, "Inscrito", "Bajo");
coordinador.registrarCamper(camper1);

const trainer1 = new Trainer("Pedro", "Ruta NodeJS", "Mañana");
coordinador.registrarTrainer(trainer1);

coordinador.crearRuta("Ruta NodeJS", ["Fundamentos de programación", "Programación Web", "Bases de datos", "Backend"], 33, "MongoDB", "MySQL");

coordinador.asignarCamperARuta(1, "Ruta NodeJS");

console.log("Campers inscritos:");
console.log(coordinador.listarCampersPorEstado("Inscrito"));
console.log("\nEntrenadores:");
console.log(coordinador.listarTrainers());
console.log("\nCampers asignados a Ruta NodeJS:");
console.log(coordinador.listarCampersAsociadosARuta("Ruta NodeJS"));
console.log("\nCampers con rendimiento bajo:");
console.log(coordinador.listarCampersConRendimientoBajo());