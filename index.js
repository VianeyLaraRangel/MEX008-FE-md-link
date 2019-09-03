#!/usr/bin/env node
//Módulos que contienen las funciones
const isMarkdown = require('./lib/ismd');
// const readingFile = require('./lib/reading');
// const identifingFile = require('./lib/identify');
// const fileUrl = new URL('');

//Argumentos de la línea de comandos pasados por la CLI
const listOfArgs = process.argv;
const fileToRead = listOfArgs[2];
console.log(fileToRead);

// module.exports = (fs) => {
// };

