function saveSuperheroes() {
    const superheroesJSON = JSON.stringify(superheroes);

    const blob = new Blob([superheroesJSON], { type: 'application/json' });

    const fileWriter = new FileWriter();

    fileWriter.write(blob, 'superheroes.json');
}

class FileWriter {
    constructor() {
        if (!window.requestFileSystem) {
            console.error('tu buscador no soporta esta api');
            return;
        }

        window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, this.onFileSystemInit.bind(this), this.onError.bind(this));
    }

    onFileSystemInit(fs) {
        console.log('sistema inicializandose');

        fs.root.getFile('superheroes.json', { create: true }, this.onFileCreated.bind(this), this.onError.bind(this));
    }

    onFileCreated(fileEntry) {
        console.log('super creado:', fileEntry);

        fileEntry.createWriter(this.onWriterInit.bind(this), this.onError.bind(this));
    }

    onWriterInit(fileWriter) {
        console.log('escribiendo inicializacion:', fileWriter);

        fileWriter.onwriteend = () => {
            console.log('completado');
        };
        fileWriter.onerror = (error) => {
            console.error('fallo:', error);
        };

        fileWriter.write(this.blob);
    }

    write(blob, filename) {
        this.blob = blob;
        this.filename = filename;
    }

    onError(error) {
        console.error('Error:', error);
    }
}