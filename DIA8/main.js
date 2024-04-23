document.getElementById('apiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('idInput').value;
    const apiUrl = 'https://swapi.py4e.com/api/';

    fetch(apiUrl + '/' + id)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error al consultar el API:', error);
            document.getElementById('result').innerHTML = 'Error al consultar , inténtalo de nuevo.';
        });
});
swapi.get('https://swapi.dev/api/planets/').then((resultad) => {
    console.log(resultado);
    return resultado.nextPage();
}).then((resultado) => {
    console.log(resultado);
    return resultado.previousPage();
}).then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
});
getHomeworld().then((result) => {
    console.log(result);
});