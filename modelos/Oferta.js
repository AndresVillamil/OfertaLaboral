const mongoose = require('mongoose');

let OfertaSchema = new mongoose.Schema({
    idOferta: Number,
    nombreOferta: String,
    detalleOferta: String
})


module.exports = mongoose.model('oferta', OfertaSchema, 'Ofertas');