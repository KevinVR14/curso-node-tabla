const { crearArchivo } = require ('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors');

console.log(argv);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = '5'] = arg3.split('=');
// console.log(process.argv);

// const base = 7;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err));