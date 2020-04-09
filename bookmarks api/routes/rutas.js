const express = require('express')
const router = express.Router();
const {validarIndormacion,guardarInformacion,obtenerInformacion,eliminarInformacion,actualizarInformacion} = require('../controllers/controlador')

/**
 * Obtener los links guardados por un usuario
 */
router.get("/url",(req,res) => {
    obtenerInformacion().then(respuesta => {
        res.send(respuesta.rows)
    }).catch(error => {
        res.send(error)
    })
})

/**
 * Insertar informacion en la base de datos
 */
router.post("/insertar",(req,res) => {
    try {
        let info = req.body
        //Se invoca el metodo que validara la informacion
        validarIndormacion(info)
        //Se invoca el metodo que guarda la informacion en la base de datos siempre y cuando no hayan errores
        guardarInformacion(info)
        res.send({ok:true, mensaje:"La informacion se guardo correctamente", info: info})
    } catch (error) {
        res.send(error)
    }
})

/**
 * Elimina informacion de la base de datos
 */
router.delete("/eliminar/:id",(req,res) => {
    let id = req.params.id;
    eliminarInformacion(id).then(respuesta => {
        res.send(respuesta)
    }).catch(error => {
        res.send(error)
    })
})

/**
 * Actualiza informacion de la base de datos
 */
router.put("/actualizar/:id",(req,res) => {
    let id = req.params.id;
    let info = req.body
    actualizarInformacion(id,info).then(respuesta => {
        res.send(respuesta);
    }).catch(error => {
        res.send(error)
    })

})

module.exports = router;