//Hacer un modulo "is markdown" para detectar si hay un archivo md
const nodePath = require('path');

const isMarkdown = (path) => {
    let fileExtension = nodePath.extname(path);
    console.log(fileExtension);
    if (fileExtension === '.md') {
        return (console.log('Se ha detectado markdown'))
    } else {
        return (console.log('No se ha detectado archivo markdown'))
    }
};

module.exports = isMarkdown;