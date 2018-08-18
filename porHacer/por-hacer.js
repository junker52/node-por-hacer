const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('Data stored OK');
      });
}

const crear = (descripcion) => {

    cargarDB();

    //Objeto template
    let porHacer = {
        descripcion,
        completado: false
    }

    

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

module.exports = {
    crear
}