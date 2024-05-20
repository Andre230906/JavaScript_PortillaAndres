const container = document.getElementById('container');

fetch('https://api.spacexdata.com/v4/capsules')
    .then(response => response.json())
    .then(data => {
        data.forEach(capsule => {
            const capsuleDiv = document.createElement('div');
            capsuleDiv.classList.add('capsule');

            const name = document.createElement('h3');
            name.textContent = capsule.name;

            const status = document.createElement('p');
            status.textContent = `Estado: ${capsule.status}`;

            const image = document.createElement('img');
            image.src = capsule.flickr_images[0]; // Mostramos la primera imagen de la cápsula

            capsuleDiv.appendChild(name);
            capsuleDiv.appendChild(status);
            capsuleDiv.appendChild(image);

            container.appendChild(capsuleDiv);
        });
    })
    .catch(error => console.log(error));