document.getElementById('apiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('idInput').value;
    const apiUrl = 'https://swapi.py4e.com/api/';

    fetch(apiUrl + '/' + id)
        .then(response => response.json())
        .then(data => {
            const template = `
            <table class="table table-bordered border- table-dark-transparent">
            <tr>
            <th class="text-"><strong>Name:</strong></th>
            <td class="text-">${data.name}</td>
            </tr> 
            <tr>
            <th class="text-"><strong>Height:</strong></th>
            <td class="text-">${data.height}</td>
            </tr> 
            <tr>
            <th class="text-"><strong>Mass:</strong></th>
            <td class="text-">${data.mass}</td>
            </tr>
            <tr>
            <th class="text-"><strong>Hair color:</strong></th>
            <td class="text-">${data.hair_color}</td>
            </tr>
            <tr>
            <th class="text-"><strong>Skin color:</strong></th>
            <td class="text-">${data.skin_color}</td>
            </tr>
            <tr>
            <th class="text-"><strong>Eye color:</strong></th>
            <td class="text-">${data.eye_color}</td>
            </tr>
            <tr>
            <th class="text-"><strong>Birth year:</strong></th>
            <td class="text-">${data.birth_year}</td>
            </tr>
            <tr>
            <th class="text-"><strong>Gender:</strong></th>
            <td class="text-">${data.gender}</td>
            </tr>
            <tr>
            <th class="text-"><strong>Homeworld:</strong></th>
            <td class="text-"><p id="homeworldInfo"></p></td>
            </tr>
            <tr>
            <th class="text-"><strong>Movies:</strong></th>
            <td class="text-"><p id="filmsList"></p></td>
            </tr>
            <tr>
            <th class="text-"><strong>Species:</strong></th>
            <td class="text-"><p id="speciesList"></p></td>
            </tr>
            <tr>
            <th class="text-"><strong>Vehicles:</strong></th>
            <td class="text-"><p id="vehicleslist"></p></td>
            </tr>
            <tr>
            <th class="text-"><strong>Starships:</strong></th>
            <td class="text-"><p id="starshipsList"></p></td>
            </tr>
            <tr>
            <th class="text-"><strong>Created:</strong></th>
            <td class="text">${data.created}</td>
            </tr>
            <tr>
            <th class="text"><strong>Last edited:</strong></th>
            <td class="text">${data.edited}</td>
            </tr>
            <tr>
            <th class="text"><strong>URL:</strong></th>
            <td class="text">${data.url}</td>
            </tr>
            </table>
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