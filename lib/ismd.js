//Hacer un modulo "is markdown" para detectar si hay un archivo md

const isMarkdown = (path) => {
//Argumentos recibidos en la CLI
    const listOfArgs = process.argv; //Usar process.argv de node para leer el path

    const fileToRead = listOfArgs[2]; //Este es el path (posicion de la ruta del archivo)

    const absolutePath = path.resolve(fileToRead); //Transforma a path absoluto

    const fileExtension = path.extname(absolutePath); //Extensión del archivo
    if (fileExtension === '.md') {
        return (console.log('Se ha detectado markdown'))
    } else {
        return (console.log('No se ha detectado archivo markdown'))
    }
};

module.exports = isMarkdown;