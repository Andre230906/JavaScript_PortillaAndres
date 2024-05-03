document.addEventListener('DOMContentLoaded', function() {
    const superheroesList = document.getElementById('superheroes-list');
    const addHeroButton = document.getElementById('add-hero');
    const saveHeroButton = document.getElementById('save-h');
    const updateHeroButton = document.getElementById('update-hero');
    const deleteHeroButton = document.getElementById('delete-hero');
    const showHeroesButton = document.getElementById('show-heroes');

    let superheroes = [];

    function renderSuperheroes() {
        superheroesList.innerHTML = '';
        superheroes.forEach((hero, index) => {
            const heroDiv = document.createElement('div');
            heroDiv.innerHTML = `<strong>ID: ${index + 1}</strong><br>
                                 Nombre: ${hero.heroName} (${hero.actorName})<br>
                                 Edad: ${hero.heroAge}<br>
                                 Poder: ${hero.power}<br>
                                 Fecha: ${hero.date}<br>
                                 Productora: ${hero.productora}`;
            superheroesList.appendChild(heroDiv);
        });
    }

    function loadSuperheroes() {
        fetch('superheroes.json')
            .then(response => response.json())
            .then(data => {
                superheroes = data;
                renderSuperheroes();
            })
            .catch(error => console.error('Error cargando el superheroe:', error));
    }
    loadSuperheroes();

    function saveSuperheroes() {
        fetch('save.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'superheroes/json'
                },
                body: JSON.stringify(superheroes)
            })
            .then(() => console.log('Superheroes guardado de manera exitosa!'))
            .catch(error => console.error(':', error));
    }


    loadSuperheroes();

    addHeroButton.addEventListener('click', function() {
        const heroName = document.getElementById('hero-name').value;
        const heroAge = document.getElementById('hero-age').value;
        const heroPower = document.getElementById('hero-power').value;
        const actorName = document.getElementById('actor-name').value;
        const actorLocation = document.getElementById('actor-location').value;
        const actorDate = document.getElementById('start').value;
        const productora = document.getElementById('lang').value;

        const newHero = {
            heroName,
            heroAge,
            power: heroPower,
            actorName,
            location: actorLocation,
            date: actorDate,
            productora
        };

        superheroes.push(newHero);
        renderSuperheroes();
        saveSuperheroes();
    });

    deleteHeroButton.addEventListener('click', function() {
        const index = prompt('Ingrese el índice del héroe a eliminar:') - 1;
        if (index >= 0 && index < superheroes.length) {
            superheroes.splice(index, 1);
            renderSuperheroes();
            saveSuperheroes();
        } else {
            alert('id inválido.');
        }
    });
    updateHeroButton.addEventListener('click', function() {

    });

    showHeroesButton.addEventListener('click', function() {
        renderSuperheroes();
    });
});