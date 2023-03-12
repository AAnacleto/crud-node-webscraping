const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PISchema = new Schema({
    horario:{
        type: String
    },
    atracao: {
        type: String
    }
});

const PI = mongoose.model('Programacao', PISchema);

module.exports = PI;