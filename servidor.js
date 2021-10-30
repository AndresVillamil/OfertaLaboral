//console.log("Hola mundo desde Nodejs")

//Importar require
const express = require('express');
const mongoose = require('mongoose');
//Importar Schema
const OfertaSchema = require('./modelos/Oferta.js');
const SolicitanteSchema = require('./modelos/Solicitante.js');

const app = express();
//Ruta
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Conexión a base de datos desde NodeJS 
mongoose.connect("mongodb+srv://prog_web:1234@clusterprogramacionweb.pz9qz.mongodb.net/OfertasDB?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

router.get('/oferta', (req, res) => {
    OfertaSchema.find(function(err,datos){
        if(err){
            console.log("Error leyendo las ofertas");
        }else{
            res.send(datos);
        }
    })
});

/***** */
router.get('/solicitante', (req, res) => {
    SolicitanteSchema.find(function(err,datos){
        if(err){
            console.log("Error leyendo las solicitudes");
        }else{
            res.send(datos);
        }
    })
});
/******************************** */
router.post('/oferta', (req, res) => {
    let nuevaOferta =new OfertaSchema({
        idOferta: req.body.id,
        nombreOferta: req.body.nombre,
        detalleOferta: req.body.detalle
    });

    nuevaOferta.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Oferta almacenada correctamente");
    })
});

/********************************** */
router.post('/solicitante', (req, res) => {
    let nuevaSolicitud =new SolicitanteSchema({
    idSolicitante: req.body.id,
    tipoDocumento: req.body.tipoDocumento,
    documentoIdentificacion: req.body.documentoIdentificacion,
    nombreSolicitante: req.body.nombreSolicitante,
    apellidoSolicitante: req.body.apellidoSolicitante,
    direccionSolicitante : req.body.direccionSolicitante,
    correoElectronico: req.body.correoElectronico,
    telfonoFijo: req.body.telfonoFijo,
    telfonoCelular : req.body.telfonoCelular,
    enlaceSitioWeb: req.body.enlaceSitioWeb,
    descripcionPerfil: req.body.descripcionPerfil
    });

    

    nuevaSolicitud.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Solicitud almacenada correctamente");
    })
});

/********************************** */
//Prueba API Rest

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});