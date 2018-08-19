
const descripcion = {
    alias: 'd',
    required: true
};

const completado = {
    alias: 'c',
    default: true
};
//Comandos: Crear (--descripcion o -d), Listar, Actualizar(--descripcion o -d || --completado o -c default true) con --help
const argv = require('yargs')
    .command('crear', 'Crear nueva Tarea', {
        descripcion
    })
    .command('borrar', 'Borrar tarea existente', {
        descripcion
    })
    .command('listar', 'Listar tareas')
    .command('actualizar', 'Actualizar estado de una tarea', {
        descripcion, completado
    })
    .help()
    .argv


module.exports = {
    argv
}