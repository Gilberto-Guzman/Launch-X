// Este es nuestro modelo

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function create(programmingLanguajes) {

    const query = `
        INSERT INTO lenguajes_programacion
        (nombre, anio_salida, github_rank)
        VALUES
        (
            "${programmingLanguajes.nombre}",
            "${programmingLanguajes.anio_salida}",
            "${programmingLanguajes.github_rank}"
        )
    `
    console.log(query);

    const resultado = await db.query( `
        INSERT INTO lenguajes_programacion
        (nombre, anio_salida, github_rank)
        VALUES
        (
            "${programmingLanguajes.nombre}",
            "${programmingLanguajes.anio_salida}",
            "${programmingLanguajes.github_rank}"
        )
    `);          

    let message = "Error al crear el lenguaje de programación";
    if (resultado.affectedRows) {
        message = "El lenguaje se ha creado con éxito";
    }
    return {message};
}

async function read(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    
    const rows = await db.query(`
        SELECT * FROM lenguajes_programacion;
    `);

    const data = helper.emptyRows(rows);
    const metadata = {page};

    return {
        data,
        metadata
    }
}

async function update(id, programmingLanguajes) {
    const resultado = await db.query(`
        UPDATE lenguajes_programacion
        SET nombre="${programmingLanguajes.nombre}", anio_salida="${programmingLanguajes.
        anio_salida}", github_rank="${programmingLanguajes.github_rank}" WHERE id="${id}"
    `);

    let message = "Error al actualizar el lenguaje de programación";
    if (resultado.affectedRows) {
        message = "El lenguaje se ha actualizado con éxito";
    }
    return {message};
}

async function delete1(id) {
    const resultado = db.query(
        `DELETE FROM lenguajes_programacion WHERE id="${id}"`
    );
    
    let message = "Error al eliminar el lenguaje de programación";
    if (resultado.affectedRows) {
        message = "El lenguaje se ha eliminado con éxito";
    }
    return {message};
}

module.exports = {
    create,
    read,
    update,
    delete1
}