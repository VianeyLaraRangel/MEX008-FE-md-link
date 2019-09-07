#!/usr/bin/env node
//Módulos de node
const path = require('path');

//Módulos internos que contienen las funciones
const mdFile = require('./lib/ismd');
const readingFile = require('./lib/readingLinks');
const identifingFile = require('./lib/getLinks');

mdFile(path);

//Módulo de entrada a la aplicación (aquí se invocan módulos para pasarles argumentos)
module.exports = (path) => {
    
};

// module.exports = path => {
//     const finalPath = process.argv[2] || path;
//     const option1 = process.argv[3]
//     if (isMarkdown(finalPath) === false) {
//         console.log('No se encontró archivo MD')
//         return `No se encontró archivo MD`;
//     }
//     const textInFile = readFile(finalPath);
//     textInFile
//         .then(data => {
//             if (data === '') {
//                 console.log('El archivo esta vacío')
//                 return `El archivo esta vacío`;
//             }
//             analize(data, finalPath)
//         })
//         .catch(error => console.log(error))
// };