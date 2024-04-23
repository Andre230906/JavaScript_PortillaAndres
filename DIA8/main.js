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

            const fetchAndDisplayInfo = (url, listId) => {
                fetch(url)
                    .then(response => response.json())
                    .then(info => {
                        const infoItem = document.createElement('li');
                        infoItem.textContent = info.name || info.title;
                        document.getElementById(listId).appendChild(infoItem);
                    })
                    .catch(error => console.error('Error al obtener info:', error));
            };

            fetchAndDisplayInfo(data.homeworld, 'homeworldInfo');
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