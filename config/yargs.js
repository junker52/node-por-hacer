//Comandos: Crear (--descripcion o -d), Listar, Actualizar(--descripcion o -d || --completado o -c default true) con --help
const argv = require('yargs')
    .command('crear', 'Crear nueva Tarea', {
        descripcion: {
            alias: 'd',
            required: true
        }
    })
    .command('listar', 'Listar tareas')
    .command('actualizar', 'Actualizar estado de una tarea', {
        descripcion: {
            alias: 'd',
            required: true
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv

module.exports = {
    argv
}