'use strict';

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');

router.post('/iniciar-sesion', (req, res) => {
    let correo = req.body.correo;
    let contrasenna = req.body.contrasenna;

    Usuario.findOne({correo: correo}, (err, usuario_bd) => {
        if(err){
            res.json({
                msj: 'El correo o la contraseña no son correctos',
                inicio: false,
                err
            });
        }
        else {
            if (usuario && usuario.contrasenna == contrasenna) 
            {
                res.json({
                    correo: usuario.correo,
                    tipo: usuario.tipo,
                    nombre: usuario.nobre,
                    inicio: true
                });
            }
            else {
                res.json({
                    msj: 'El correo o la contraseña no son correctos',
                    inicio: false, 
                    err
                });
            }
        }
    });
});

module.exports = router;