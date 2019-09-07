#!/usr/bin/env node
//Módulos de node
const path = require('path');
//Hacer require del file system "fs" de node.js
const fs = require('fs');
// console.log(fs);

//Módulos internos que contienen las funciones
const mdFile = require('./lib/ismd');
const readingFile = require('./lib/readingLinks');
const identifingFile = require('./lib/getLinks');

//Variables
// const arrAbsolutePath = absolutePath.split();

//Invocaciones
mdFile(path);
readingFile(fs);

//Módulo de entrada a la aplicación (aquí se invocan módulos para pasarles argumentos)
module.exports = (path) => {
    
};


//Hacer require del "node fetch" de node

//Hacer un modulo "filterLinks" y usando expresiones regulares detectarlo