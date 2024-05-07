document.addEventListener('DOMContentLoaded', function() {
    const superheroesList = document.querySelector('.body-detail');
    const addHeroButton = document.querySelector('.btn-dark');
    const saveHeroButton = document.querySelector('.btn-primary');
    const updateHeroButton = document.querySelector('.btn-warning');
    const deleteHeroButton = document.querySelector('.btn-danger');
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

    function addHero() {
        const heroName = document.getElementById('characterName').value;
        const heroAge = document.getElementById('age').value;
        const heroPower = document.getElementById('poster').value;
        const actorName = document.getElementById('actorName').value;
        const actorLocation = document.getElementById('cityName').value;
        const actorDate = document.getElementById('dateAppears').value;
        const productora = document.getElementById('producer').value;

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
    }

    function deleteHero() {
        const index = prompt('Ingrese el índice del héroe a eliminar:') - 1;
        if (index >= 0 && index < superheroes.length) {
            superheroes.splice(index, 1);
            renderSuperheroes();
            saveSuperheroes();
        } else {
            alert('id inválido.');
        }
    }

    addHeroButton.addEventListener('click', addHero);
    deleteHeroButton.addEventListener('click', deleteHero);

    showHeroesButton.addEventListener('click', function() {
        renderSuperheroes();
    });
});