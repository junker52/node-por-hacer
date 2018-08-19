const argv = require('./config/yargs').argv;
const porHacer = require('./porHacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let tareas = porHacer.getListadoTareas();
        console.log('===== POR HACER ====='.green);
        tareas.forEach(element => {
            console.log(`Tarea: ${element.descripcion} | Completado: ${element.completado}`.yellow);
        });
        console.log('====================='.green);
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        if (actualizado) {
            console.log('Actualizado OK');
        } else {
            console.log('No actualizado');
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        if (borrado) {
            console.log('Borrado OK');
        } else {
            console.log('No borrado');
        }
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
