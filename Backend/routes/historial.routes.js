'use strict'
var express=require('express');
var router=express.Router();
var historialController=require('../controllers/historial.controller');





//guardar Operaciones
router.post('/guardar-operacion', historialController.saveCalculo);

//Obtener Historial
router.get('/historial', historialController.getResultados);

module.exports=router;


