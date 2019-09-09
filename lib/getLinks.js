//Hacer un modulo "getLinks" y usando expresiones regulares detectarlo
const readingFile = require('./readingLinks');
const path = require('path');

const getLinks = (path) => new Promise((resolve, error) => {
    const fileContent = readingFile(path);
    // console.log(typeof(fileContent));
    const linkByRegexp = /\[((.+?))\]\((http|https).+?\)/g;
    const textOfLinksRegexp = /.\((.+?\))/g;

    const linksInMd = fileContent.match(linkByRegexp);
    console.log(linksInMd);

    const onlyLink = fileContent.match(textOfLinksRegexp);
    // console.log(onlyLink);
    const mdLinkArr = [];

    for (let i in linksInMd) {
        let textLinks = linksInMd[i].match(textOfLinksRegexp);
        console.log(textLinks);

        mdLinkArr.push({
           href: textLinks
        });
        
        console.log(mdLinkArr);
    };
    resolve(mdLinkArr);
});

module.exports = getLinks;

