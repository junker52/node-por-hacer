const argv = require('./config/yargs').argv;
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear Nota');
        break;
    case 'listar':
        console.log('listar Nota');
        break;
    case 'actualizar':
        console.log('Actualizar Nota');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
