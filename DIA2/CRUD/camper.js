// campersModule.js

let campers = [];

function registrarCamper(camper) {
    campers.push(camper);
}

function actualizarEstadoCamper(id, nuevoEstado) {
    let index = campers.findIndex(camper => camper.id === id);
    if (index !== -1) {
        campers[index].estado = nuevoEstado;
    }
}

function asignarRutaCamper(id, ruta) {
    let index = campers.findIndex(camper => camper.id === id);
    if (index !== -1) {
        campers[index].rutaAsignada = ruta;
    }
}


module.exports = { registrarCamper, actualizarEstadoCamper, asignarRutaCamper };

// trainersModule.js

let trainers = [];

function registrarEntrenador(entrenador) {
    trainers.push(entrenador);
}

function asignarRutaEntrenador(idEntrenador, ruta) {
    let index = trainers.findIndex(entrenador => entrenador.id === idEntrenador);
    if (index !== -1) {
        trainers[index].rutaAsignada = ruta;
    }
}

function registrarNotaCamper(idCamper, nota) {}


module.exports = { registrarEntrenador, asignarRutaEntrenador, registrarNotaCamper };

// routesModule.js

let routes = [];

function crearRuta(nombre, modulos, capacidadMaxima) {
    routes.push({
        nombre: nombre,
        modulos: modulos,
        capacidadMaxima: capacidadMaxima,
        campersAsignados: []
    });
}

function asignarCamperARuta(idCamper, nombreRuta) {
    let ruta = routes.find(ruta => ruta.nombre === nombreRuta);
    if (ruta) {
        if (ruta.campersAsignados.length < ruta.capacidadMaxima) {
            ruta.campersAsignados.push(idCamper);
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


module.exports = { crearRuta, asignarCamperARuta };

// evaluationsModule.js

function calcularNotaFinal(notaTeorica, notaPractica, notaQuiz) {
    const pesoTeorica = 0.3;
    const pesoPractica = 0.6;
    const pesoQuiz = 0.1;

    let notaFinal = (notaTeorica * pesoTeorica) + (notaPractica * pesoPractica) + (notaQuiz * pesoQuiz);
    return notaFinal;
}

function evaluarCamper(notaTeorica, notaPractica, notaQuiz) {
    let notaFinal = calcularNotaFinal(notaTeorica, notaPractica, notaQuiz);
    if (notaFinal >= 60) {
        return true;
    } else {
        return false;
    }
}


module.exports = { evaluarCamper };

// reportsModule.js

const campersModule = require('./campersModule');
const trainersModule = require('./trainersModule');
const routesModule = require('./routesModule');

function listarCampersPorEstado(estado) {
    return campersModule.getCampers().filter(camper => camper.estado === estado);
}

function listarEntrenadores() {
    return trainersModule.getTrainers();
}

function listarCampersBajoRendimiento() {

}


module.exports = { listarCampersPorEstado, listarEntrenadores, listarCampersBajoRendimiento };

// enrollmentModule.js

const campersModule = require('./campersModule');
const trainersModule = require('./trainersModule');
const routesModule = require('./routesModule');

function matricularCamper(idCamper, idEntrenador, nombreRuta, fechaInicio, fechaFin, salonEntrenamiento) {
    let rutaDisponible = routesModule.asignarCamperARuta(idCamper, nombreRuta);
    if (!rutaDisponible) {
        return false;
    }

    trainersModule.asignarRutaEntrenador(idEntrenador, nombreRuta);

    campersModule.actualizarEstadoCamper(idCamper, "Cursando");


    return true;
}


module.exports = { matricularCamper };

// mainMenu.js

const readline = require('readline');
const campersModule = require('./campersModule');
const trainersModule = require('./trainersModule');
const routesModule = require('./routesModule');
const evaluationsModule = require('./evaluationsModule');
const reportsModule = require('./reportsModule');
const enrollmentModule = require('./enrollmentModule');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('\nBienvenido al sistema de gestión de CampusLands\n');
    console.log('1. Registrar nuevo Camper');
    console.log('2. Matricular Camper en ruta de entrenamiento');
    console.log('3. Registrar nota de Camper');
    console.log('4. Generar reportes');
    console.log('5. Salir\n');
}

function realizarAccion(opcion) {
    switch (opcion) {
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            mostrarMenuReportes();
            break;
        case '5':
            console.log('¡Hasta luego!');
            rl.close();
            break;
        default:
            console.log('Opción no válida. Por favor, seleccione una opción válida.');
    }
}

function mostrarMenuReportes() {
    console.log('\nGenerar reportes\n');
    console.log('1. Listar campers por estado');
    console.log('2. Listar entrenadores');
    console.log('3. Listar campers con bajo rendimiento');
    console.log('4. Volver al menú principal\n');
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                break;
            case '2':
                break;
            case '3':
                break;
            case '4':
                mostrarMenu();
                break;
            default:
                console.log('Opción no válida. Por favor, seleccione una opción válida.');
                mostrarMenuReportes();
        }
    });
}

rl.question('Presione Enter para mostrar el menú: ', () => {
    mostrarMenu();
    rl.on('line', (input) => {
        realizarAccion(input.trim());
    });
});