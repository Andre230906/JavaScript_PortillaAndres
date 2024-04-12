let datos = [];

function crearElemento() {
    console.log('%c╔════════════════════════════╗\n║      **AÑADIR**      ║\n╚════════════════════════════╝', 'font-size: 20px; color: #008080;');

    let nuevoElemento = prompt('Ingrese el nuevo elemento:');//el prompt se usa como el input del pitom
    datos.push(nuevoElemento); // El push funciona para añadir un elemento al final de un array.
    console.log('Elemento añadido correctamente.');
}

function mostrarElementos() {
    console.log('Lista de elementos:');
    datos.forEach((elemento, index) => { //funcion superior que usar un callback por cada elemento, elemento representa la posicion inicial e index el indice... Basicamente itera sobre el array y muestra la posicion del elemento 

        console.log(`${index + 1}. ${elemento}`); //el signo ${} se usa para insertar variables dentro de un string
    });
}

function actualizarElemento() {
    mostrarElementos();
    console.log('%c╔════════════════════════════╗\n║      **ACTUALIZAR**      ║\n╚════════════════════════════╝', 'font-size: 20px; color: #008080;');

    let indice = parseInt(prompt('Ingrese el número del elemento a actualizar:')) - 1;
    if (datos[indice]) {
        let nuevoValor = prompt('Ingrese el nuevo valor:');
        datos[indice] = nuevoValor;
        console.log('Elemento actualizado correctamente.');
    } else {
        console.log('Número de elemento inválido.');
    }
}

function eliminarElemento() {
    mostrarElementos();
    console.log('%c╔════════════════════════════╗\n║      **ELIMINAR**      ║\n╚════════════════════════════╝', 'font-size: 20px; color: #008080;');

    let indice = parseInt(prompt('Ingrese el número del elemento a eliminar:')) - 1;
    if (datos[indice]) {
        datos.splice(indice, 1);
        console.log('Elemento eliminado correctamente.');
    } else {
        console.log('Número de elemento inválido.');
    }
}

let opcion;
do {
    opcion = prompt('Seleccione una opción:\n1. Crear elemento\n2. Mostrar elementos\n3. Actualizar elemento\n4. Eliminar elemento\n5. Salir\n');
    switch (opcion) {
        case '1':
            crearElemento();
            break;
        case '2':
            mostrarElementos();
            break;
        case '3':
            actualizarElemento();
            break;
        case '4':
            eliminarElemento();
            break;
        case '5 ':
            console.log('¡Hasta luego!');
            break;
        default:
            console.log('Opción inválida. Por favor, seleccione una opción válida.');
    }
} while (opcion !== '5');
