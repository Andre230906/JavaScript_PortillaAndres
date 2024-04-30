// Variables globales
let playerHand = [];
let consoleHand = [];
const apiUrl = 'https://api.pokerdeck.com/deck';

// Función para obtener una carta del API de poker
async function drawCard(deckId) {
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const data = await response.json();
        return data.cards[0];
    } catch (error) {
        console.error('Error al sacar una carta:', error);
    }
}

// Función para adaptar una carta del poker a una carta del UNO
function adaptToUNO(card) {
    const unoColors = {
        'hearts': 'rojo',
        'diamonds': 'amarillo',
        'clubs': 'azul',
        'spades': 'verde'
    };

    const unoValues = {
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': 'Comodín +2',
        'JACK': 'Comodín Reversa',
        'QUEEN': 'Comodín Cambia de color',
        'KING': 'Comodín Cancelar turno',
        'ACE': 'Comodín +4'
    };

    const unoColor = unoColors[card.suit.toLowerCase()];
    const unoValue = unoValues[card.value];

    return `${unoValue} de ${unoColor}`;
}

// Función para inicializar el juego
async function initGame() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Adaptar las cartas del API de poker a las cartas de UNO
        playerHand = adaptCards(data.playerCards);
        consoleHand = adaptCards(data.consoleCards);

        renderCards(playerHand, 'player-hand');
        renderCards(consoleHand, 'console-hand');
    } catch (error) {
        console.error('Error al cargar las cartas:', error);
    }
}

// Función para adaptar las cartas del API de poker a las cartas de UNO
function adaptCards(cards) {
    return cards.map(card => adaptToUNO(card));
}

// Función para renderizar las cartas en la interfaz
function renderCards(cards, targetId) {
    const target = document.getElementById(targetId);
    target.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card;
        target.appendChild(cardElement);
    });
}

// Función para jugar carta
function playCard() {
    // Lógica para que el jugador juegue una carta
}

// Función para que la consola juegue una carta
function consolePlayCard() {
    // Lógica para que la consola juegue una carta
}

// Event listeners
document.getElementById('play-card-btn').addEventListener('click', playCard);

// Inicializar el juego al cargar la página
initGame();