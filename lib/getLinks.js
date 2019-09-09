//Hacer un modulo "getLinks" y usando expresiones regulares detectarlo
const readingFile = require('./readingLinks');
const path = require('path');

const getLinks = (path) => {
    console.log(readingFile(path));
};

module.exports = getLinks;

