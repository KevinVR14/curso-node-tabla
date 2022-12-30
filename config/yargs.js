const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicación'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra tabla en consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'Hasta que número multiplicar'
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base debe ser un número'
    }
    return true;
})
.argv;

module.exports = argv;