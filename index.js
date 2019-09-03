#!/usr/bin/env node

//Módulos de node
const path = require('path');

//Módulos internos que contienen las funciones
const isMarkdown = require('./lib/ismd');
const readingFile = require('./lib/reading');
const identifingFile = require('./lib/identify');

//Argumentos de la línea de comandos pasados por la CLI
const listOfArgs = process.argv;
const fileToRead = listOfArgs[2]; //Este es el path
const absolutePath = path.resolve(fileToRead);
const fileExtension = path.extname(absolutePath);
console.log(fileExtension);

// module.exports = () => {

// };
