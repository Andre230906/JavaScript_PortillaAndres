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
                <p><strong>Año de nacimiento:</strong> ${data.birth_year}</p>
                <p><strong>Género:</strong> ${data.gender}</p>
                <p><strong>Mundo natal:</strong> ${data.homeworld}</p>
                <p><strong>Películas:</strong></p>
                <ul id="filmsList"></ul>
                <p><strong>Especies:</strong> ${data.species.join(', ')}</p>
                <p><strong>Naves:</strong> ${data.starships.join(', ')}</p>
                <p><strong>fecha de creacion:</strong> ${data.created}</p>
                <p><strong>ultima modificacion:</strong> ${data.edited}</p>
                <p><strong>URL:</strong> ${data.url}</p>
            `;

            document.getElementById('result').innerHTML = template;

            const filmsList = document.getElementById('filmsList');
            data.films.forEach(film => {
                fetch(film)
                    .then(response => response.json())
                    .then(filmData => {
                        const filmItem = document.createElement('li');
                        filmItem.textContent = filmData.title;
                        filmsList.appendChild(filmItem);
                    })
                    .catch(error => console.error('Error al obtener info de la pelí:', error));
            });
        })
        .catch(error => {
            console.error('Error al hacer search:', error);
            document.getElementById('result').innerHTML = 'Error al buscar tu personajito. Plis, inténtalo de nuevo.';
        });
});

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