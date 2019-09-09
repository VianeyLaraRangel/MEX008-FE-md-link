//Hacer require del file system "fs" de node.js
const fs = require('fs');

const readFile = (path) => {
const readingFile = fs.readFileSync(path, "utf-8");
return readingFile;
};

module.exports = readFile;