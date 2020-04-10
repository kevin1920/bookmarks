
//Importar servicio de postgres
const ServiciPG = require('../services/postgres')

/**
 * Validar informacion que se quiere insertar
 * @param {*} info 
 */

let validarIndormacion = info => {
    if(!info.url){
        throw {
            ok:false, 
            mensaje:"La url es obligatoria"
        };
    }
    
    if(!info.nombre){
        throw {
            ok:false, 
            mensaje:"El nombre es obligatoria"
        };
    }
}

/**
 * Metodo que guarda en la base de datos la informacion
 * @param {*} info 
 */

let guardarInformacion = async info => {
    let servicio = new ServiciPG()
    let sql = `insert into links (url,nombre,descripcion) values('${info.url}','${info.nombre}','${info.descripcion}')`
    let respuesta = await servicio.ejecutarSQL(sql)
    return respuesta;
}

/**
 * Metodo que obtiene informacion de la base de datos
 */
let obtenerInformacion = async () => {
    let servicio = new ServiciPG()
    let sql = `select idlink,url,nombre,descripcion from links order by idlink`
    let respuesta = await servicio.ejecutarSQL(sql)
    return respuesta;
}

/**
 * Metodo que elimina informacion de la base de datos
 */
let eliminarInformacion = async (id) => {
    let servicio = new ServiciPG()
    let sql = `delete from links where idlink = ${id}`
    let respuesta = await servicio.ejecutarSQL(sql)
    return respuesta;
}

/**
 * Metodo que actualiza informacion de la base de datos
 * @param {*} id 
 * @param {*} info 
 */
let actualizarInformacion = async (id, info) => {
    let servicio = new ServiciPG()
    let sql = `update links set url = '${info.url}', nombre = '${info.nombre}', descripcion = '${info.descripcion}' where idlink = ${id}`
    let respuesta = await servicio.ejecutarSQL(sql)
    return respuesta;
}



module.exports = {validarIndormacion,guardarInformacion,obtenerInformacion,eliminarInformacion,actualizarInformacion};