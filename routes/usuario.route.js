'use strict';

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');

router.post('/registrar-usuario', (req, res) => {
    let usuario = new Usuario({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        edad: req.body.edad,
        estatura: req.body.estatura,
        peso: req.body.peso
    });
    usuario.save((err, usuario_bd) => {
        if(err){
            res.json({
                msj: 'El usuario no se pudo registrar', err
            });
        }
        else {
            res.json({
                msj: 'El usuario se registró correctamente', usuario_bd
            });
        }
    });
});

module.exports = router;