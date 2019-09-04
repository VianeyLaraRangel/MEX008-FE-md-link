#!/usr/bin/env node

//Módulos de node
const path = require('path');

//Módulos internos que contienen las funciones
// const isMarkdown = require('./lib/ismd');
const readingFile = require('./lib/reading');
const identifingFile = require('./lib/identify');

//Argumentos de la línea de comandos pasados por la CLI
const listOfArgs = process.argv;
const fileToRead = listOfArgs[2]; //Este es el path
// console.log(fileToRead);

const absolutePath = path.resolve(fileToRead); //Transforma a path absoluto

const fileExtension = path.extname(absolutePath); //Extensión del archivo
// console.log(fileExtension);

const arrAbsolutePath = absolutePath.split();
// console.log(arrAbsolutePath);

const isMarkdown = (path) => {
    if (fileExtension === '.md') {
        return (console.log('Se ha detectado markdown'))
    }else{
        return(console.log('No se ha detectado archivo markdown'))
    }
};

module.export = isMarkdown(fileExtension);


//Módulo de entrada a la aplicación (aquí se invocan módulos para pasarles argumentos)
module.exports = (path) => {
};