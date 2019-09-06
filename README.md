# Markdown links 


## 1. Preámbulo
[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

## 2. Resumen del proyecto

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

Esa herramienta es:
# *md-link-vianeylararangel*


## 3. Objetivos de la funcionalidad
- Crear una librería de *npm* que "detecte" si un "path" o `URL` contiene un archivo `markdown` (.md).

- Validar la existencia de "links". 

- Verificar el status de estos "links". Por ejemplo:
    - Si redireccionan correctamente a la URL mostrará "Status: clean"
    - Si redirecciona a una página que no se encuentra, mostrará "Status: 404"
    - Si el link está "roto" y no puede redireccionar, mostrará "Status: fail".

Ésta información será mostrada en la terminal/consola del proyecto.

## 4. Instalación
Para integrar el módulo `md-link-vianeylararangel` utiliza alguna de las siguientes opciones:

`npm i md-link-vianeylararangel`

`npm i https://github.com/VianeyLaraRangel/MEX008-FE-md-link`

## 5. Uso

1. Desde la terminal

Una vez instalada la aplicación, introduce en la consola lo siguiente:

`md-link-vianeylararangel <'url a verificar'>`

Esto te permitirá identificar si hay un archivo .md

Si buscas verificar los links, agrega al comando la bandera `--validate`.

`md-link-vianeylararangel <'url a verificar' --validate>`

2. Cómo API (para uso programático)

- Diagrama de flujo
![]()

![]()
Aquí la imagen de la consola cuando...pues arroje algo.

## 6. Cumplimiento de objetivos (checklist) 

### General

- [X] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

- [ ] Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
- [ ] Un board con el backlog para la implementación de la librería.
- [ ] Documentación técnica de la librería.
- [ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [ ] El módulo exporta una función con la interfaz (API) esperada.
- [ ] Implementa soporte para archivo individual
- [ ] Implementa soporte para directorios
- [ ] Implementa `options.validate`

### Pruebas / tests

- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
      lines, y branches.
- [ ] Pasa tests (y linters) (`npm test`).

### CLI

- [X] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [ ] Se ejecuta sin errores / output esperado
- [ ] Implementa `--validate`
- [ ] Implementa `--stats`

## Hacker Edition

- [ ] Crear un script en el package.json que transforme el codigo ES6+ a ES5.
- [ ] Puedes agregar la propiedad line a cada objeto link indicando en qué línea del archivo se encontró el link.
- [ ] Puedes agregar más estadísticas.
- [ ] Integración continua con Travis o Circle CI.