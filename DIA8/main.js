document.getElementById('apiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('idInput').value;
    const apiUrl = 'https://swapi.py4e.com/api/';

    fetch(apiUrl + '/' + id)
        .then(response => response.json())
        .then(data => {
            const formattedData = JSON.stringify(data, null, 4);

            document.getElementById('result').innerHTML = `<pre>${formattedData}</pre>`;
        })
        .catch(error => {
            console.error('Error al encontrar tu personaje:', error);
            document.getElementById('result').innerHTML = 'Error al buscar tu personaje. Por favor, inténtalo de nuevo.';
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