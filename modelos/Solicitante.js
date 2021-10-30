const mongoose = require('mongoose');

let SolicitanteSchema = new mongoose.Schema({
    idSolicitante: Number,
    tipoDocumento: String,
    documentoIdentificacion: Number,
    nombreSolicitante: String,
    apellidoSolicitante: String,
    direccionSolicitante : String,
    correoElectronico: String,
    telfonoFijo: String,
    telfonoCelular : String,
    enlaceSitioWeb: String,
    descripcionPerfil: String

})


module.exports = mongoose.model('solicitante', SolicitanteSchema, 'Solicitantes');