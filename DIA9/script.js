class SoyPro extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <img id="foto" src="" alt="imagen">
            <h2>My name is <br><span id="nombre"></span></h2>

            <div class="datos">
                <p>Correo: <span id="correo"></span></p>
                <p>Celular: <span id="telefono"></span></p>
                <p>Cumpleaños: <span id="cumpleanos"></span></p>
                <p>Ubicación: <span id="ubicacion"></span></p>
                <p>Contraseña: <span id="password"></span></p>
            </div>

            <div id="infoHover"></div>

            <div class="iconos">
                <div class="gg-user" data-index="0"></div>
                <div class="gg-voicemail-r" data-index="1"></div>
                <div class="gg-calendar-dates" data-index="2"></div>
                <div class="gg-flag" data-index="3"></div>
                <div class="gg-smartphone-shake" data-index="4"></div>
            </div>
        </div>
        `;
    }
}

customElements.define('soy-pro', SoyPro);

let datoActual = null;

const generarUsuario = async() => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    document.querySelector('#foto').src = datos.picture.medium;
    document.querySelector('#nombre').textContent = datos.name.first;
    document.querySelector('#correo').textContent = datos.email;
    document.querySelector('#telefono').textContent = datos.phone;
    document.querySelector('#cumpleanos').textContent = datos.dob.date;
    document.querySelector('#ubicacion').textContent = datos.location.city;
    document.querySelector('#password').textContent = datos.login.password;
}

const mostrarDato = (dato, textoAdicional) => {
    if (dato !== datoActual) {
        document.querySelector('#infoHover').innerHTML = `${textoAdicional}:<br>${dato}`;
        datoActual = dato;
    }
}

const limpiarInfo = () => {
    document.querySelector('#infoHover').textContent = '';
    datoActual = null;
}

generarUsuario();

document.querySelectorAll('.iconos div').forEach(icono => {
    icono.addEventListener('mouseover', () => {
        const index = icono.dataset.index;
        switch (index) {
            case '0':
                mostrarDato(document.querySelector('#nombre').textContent, 'Hola, Mi nombre es');
                break;
            case '1':
                mostrarDato(document.querySelector('#correo').textContent, 'Mi correo es');
                break;
            case '2':
                mostrarDato(document.querySelector('#telefono').textContent, 'Mi número de telefono es');
                break;
            case '3':
                mostrarDato(document.querySelector('#cumpleanos').textContent, 'Mi fecha de cumpleaños es');
                break;
            case '4':
                mostrarDato(document.querySelector('#ubicacion').textContent, 'Yo me ubico en');
                break;
            default:
                limpiarInfo();
        }
    });
});