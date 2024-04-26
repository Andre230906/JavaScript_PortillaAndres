document.getElementById('apiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('idInput').value;
    const apiUrl = 'https://swapi.py4e.com/api/';

    fetch(apiUrl + '/' + id)
        .then(response => response.json())
        .then(data => {
            const template = `
                <h2>${data.name}</h2>
                <p><strong>Altura:</strong> ${data.height}</p>
                <p><strong>Peso:</strong> ${data.mass}</p>
                <p><strong>Color de pelo:</strong> ${data.hair_color}</p>
                <p><strong>Color de piel:</strong> ${data.skin_color}</p>
                <p><strong>Color de ojos:</strong> ${data.eye_color}</p>
                <p><strong>Año en que nacio:</strong> ${data.birth_year}</p>
                <p><strong>Género:</strong> ${data.gender}</p>
                <p><strong>Mundo de donde nacio:</strong></p>
                <ul id="homeworldInfo"></ul>
                <p><strong>Películas:</strong></p>
                <ul id="filmsList"></ul>
                <p><strong>Especies:</strong></p>
                <ul id="speciesList"></ul>
                <p><strong>Naves:</strong></p>
                <ul id="starshipsList"></ul>
                <p><strong>fecha de creacion:</strong> ${data.created}</p>
                <p><strong>fecha de ultima modificacion:</strong> ${data.edited}</p>
                <p><strong>URL:</strong> ${data.url}</p>
            `;

            document.getElementById('result').innerHTML = template;

            const fetchAndDisplayInfo = (url, listId) => { // esta funcion trabaja con dos parametros
                fetch(url) // el fetch realiza una solicitud
                    .then(response => response.json()) // el them lo que hace es transformar la respuesta en un objeto json
                    .then(info => { // este them procesa la info obtenida de la solicitud
                        const infoItem = document.createElement('li'); // se almacena el json para que lo transforme a una lista
                        infoItem.textContent = info.name || info.title; // se agrega el nombre o titulo de la info
                        document.getElementById(listId).appendChild(infoItem); // se agrega la info a la lista
                    })
                    .catch(error => console.error('Error al obtener info:', error)); // si hay un error, se muestra en consola
            };

            fetchAndDisplayInfo(data.homeworld, 'homeworldInfo'); // se llama a la funcion con los parametros de la ur del mundo natal mostrandolo en homeworldinfo
            data.films.forEach(film => fetchAndDisplayInfo(film, 'filmsList'));
            data.species.forEach(species => fetchAndDisplayInfo(species, 'speciesList'));
            data.starships.forEach(starship => fetchAndDisplayInfo(starship, 'starshipsList'));
        })
        .catch(error => {
            console.error('Error al consultar el API:', error);
            document.getElementById('result').innerHTML = 'Error al buscar. plis, trate de nuevo.';
        });
});

// intento de hacerlo con librerias propias del api y promesas.. nome funciono :c 

swapi.get('https://swapi.dev/api/planets/').then((resultad) => {
    console.log(result);
    return result.nextPage();
}).then((result) => {
    console.log(result);
    return result.previousPage();
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
getHomeworld().then((result) => {
    console.log(result);
});
//finisha