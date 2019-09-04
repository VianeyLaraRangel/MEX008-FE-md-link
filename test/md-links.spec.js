const mdLinks = require('../index.js');


describe('mdLinks', () => {
  it('should be function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('no md file found', () => {
    expect(mdLinks('../files/prueba.doc')).toBe('Status: no md file found');
  });
});

//Test: Si es un markdow, true. Si no, false
//1) Verificar si el archivo es un .md

//Test: Leer el archivo y recibir un string 
//2) Si puedo leerlo puedo entrar al contenido

//Tip: Si el módulo recibe cómo respuesta un booleano, usar sintaxis de pregunta "is?"

//Tip: Si el módulo realizará una acción, usar un verbo ejemplo "print"

//Tip: Si el módulo retornará algo, usar verbo referente cómo "get"