const { Router } = require('express');
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemaUsuario = new eschema({
    codigo: String,
    nombre: String,
    edad: String,
    correo: String,
    celular: String,
    plan: String,
})

const ModeloUsuario = mongoose.model('usuario', eschemaUsuario)
module.exports = router


//Ruta de prueba
// router.get('/ejemplo', (req, res) => {
//     res.end('Saludo carga desde ruta ejemplo')
// })


//LLAMADA A LA API PARA AGREGAR USUARIOS
router.post('/agregarusuario', (req, res) => {
    const nuevoUsuario = new ModeloUsuario({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        edad: req.body.edad,
        correo: req.body.correo,
        celular: req.body.celular,
        plan: req.body.plan
    })
    nuevoUsuario.save(function (err) {
        if (!err) {
            res.send('Usuario agregado correctamente')
        } else {
            res.send(err)
        }
    })
})


//LLAMADA PARA OBTENER LA LISTA DE USUARIOS
router.get('/obtenerlistadeusuarios', (req, res) => {
    ModeloUsuario.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//LLAMADA PARA TRAER LISTA DE USUARIOS Y PODER EDITAR
router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({ codigo: req.body.codigo }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//ACTUALIZAR USUARIO
router.post('/actualizarusuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({ codigo: req.body.codigo }, {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        edad: req.body.edad,
        correo: req.body.correo,
        celular: req.body.celular,
        plan: req.body.plan
        
    }, (err)=>{
        if (!err) {
            res.send('Usuario Actualizado correctamente')
        } else {
            res.send(err)
        }
    })
})


//BORRAR USUARIO
router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({ codigo: req.body.codigo },
        (err) => {
            if (!err) {
                res.send('Usuario eliminado correctamente')
            } else {
                res.send(err)
            }
        })
})