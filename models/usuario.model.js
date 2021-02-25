'use strict';

const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({
    cedula:{type: String, required : false, unique: true} ,//Si require está en false, quiere decir que el campo es opcional //Unique en true: No pueden haber dos objetos con el mismo nombre
    nombre: {type: String, required: false, unique: true},
    edad: {type: Number, required: false, unique: false},
    estatura: {type: Number, required: false, unique: false},
    peso: {type: Number, required: false, unique: false}
});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');