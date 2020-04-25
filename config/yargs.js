const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true,
    type: 'boolean'
};

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actauliza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'elimina un elemento en la lista', {
        descripcion
    })
    .command('listar', 'Muestra la lista de tareas', {
        completado: {
            alias: 'c',
            default: null,
            type: 'boolean'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}