const argv = require('./config/yargs').argv;
const porHacer = require('./porHacer/por-hacer');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
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
