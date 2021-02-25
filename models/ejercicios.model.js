'use strict';

const mongoose = require('mongoose');

const schema_ejercicio = mongoose.Schema({
    nombre:{type: String, required : true, unique: true} ,//Si require está en false, quiere decir que el campo es opcional //Unique en true: No pueden haber dos objetos con el mismo nombre
    zona: {type: String, required: true, unique: false},
    estado: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('Ejercicio', schema_ejercicio, 'ejercicios');