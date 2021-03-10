'use strict';

const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({
    //Si require está en false, quiere decir que el campo es opcional //Unique en true: No pueden haber dos objetos con el mismo nombre
    nombre: {type: String, required: true, unique: false},
    tipo: {type: String, required: true, unique: false},
    correo: {type: String, required: true, unique: false},
    contrasenna: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');