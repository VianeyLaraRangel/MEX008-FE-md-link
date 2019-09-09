#!/usr/bin/env node
//Módulos de node
const path = require('path');
//Hacer require del file system "fs" de node.js
const fs = require('fs');

//Módulos internos que contienen las funciones
const mdFile = require('./lib/ismd');
const readingFile = require('./lib/readingLinks');
const identifingFile = require('./lib/getLinks');

//Argumentos recibidos en la CLI
const listOfArgs = process.argv; //Usar process.argv de node para leer el path

const fileToRead = listOfArgs[2]; //Este es el path (posicion de la ruta del archivo)
// console.log(typeof(fileToRead));

const absolutePath = path.resolve(fileToRead);
console.log(typeof (absolutePath));
const finalPath = absolutePath.toString();
console.log(finalPath);

//Invocaciones
mdFile(finalPath);
readingFile(finalPath);

//Módulo de entrada a la aplicación (aquí se invocan módulos para pasarles argumentos)
module.exports = (path) => {

};


//Hacer require del "node fetch" de node

//Hacer un modulo "filterLinks" y usando expresiones regulares detectarlo