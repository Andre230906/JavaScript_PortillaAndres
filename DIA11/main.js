let currentCharacter = 1;
let lastSearchedCharacter = 1;

function mostrarPersonaje(numero) {
    if (numero >= 650 && numero <= 1025) {
        document.getElementById('pokemonImg').src = '';
        document.getElementById('pokemonName').textContent = `Trabajando en la animación de este pokemon. Estará disponible pronto.`;
    } else {
        fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('pokemonImg').src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
                document.getElementById('pokemonName').textContent = `${data.id}-${data.name}`;
                currentCharacter = numero;
            })
            .catch(error => {
                console.error('Error al obtener los datos del personaje', error);
            });
    }
}

function buscarYMostrarPersonaje(searchTerm) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(data => {
            mostrarPersonaje(data.id);
            lastSearchedCharacter = data.id;
        })
        .catch(error => {
            console.error('Error al buscar el personaje', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarPersonaje(currentCharacter);
});

document.getElementById('searchInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let searchTerm = document.getElementById('searchInput').value.toLowerCase();
        buscarYMostrarPersonaje(searchTerm);
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentCharacter = Math.max(1, currentCharacter - 1);
    mostrarPersonaje(currentCharacter);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentCharacter = Math.min(1025, currentCharacter + 1);
    mostrarPersonaje(currentCharacter);
});