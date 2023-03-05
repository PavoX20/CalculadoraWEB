'use strict'
var Operations=require('../models/operacion');

var path=require('path');


var controller={
    
    async saveCalculo(req,res){
        var operacion=new Operations();
        var params=req.body;

        operacion.valor1=params.valor1;
        operacion.valor2=params.valor2;
        operacion.operacion=params.operacion;
        console.log(params)
        switch(operacion.operacion){
            case "Suma":
                operacion.resultado=Number(operacion.valor1)+Number(operacion.valor2);
                break;
            case "Resta":
                operacion.resultado=Number(operacion.valor1)-Number(operacion.valor2);
                break;
            case "Multiplicación":
                operacion.resultado=Number(operacion.valor1)*Number(operacion.valor2);
                break;
            case "División":
                if(Number(operacion.valor2)!=0){
                    operacion.resultado=Number(operacion.valor1)/Number(operacion.valor2);
                }else{
                    
                    operacion.resultado=NaN
                }
                
                break;
            case "Potencia":
                operacion.resultado=Number(operacion.valor1)**Number(operacion.valor2);
                break;
            case "Raíz Cuadrada":
                operacion.valor2=NaN
                operacion.resultado=Math.sqrt(Number(operacion.valor1));
                break;
            default :
                operacion.resultado=NaN
                break;
        }

        
        const result = await operacion.save() 
        if (!result) return res.status(500).send({message:"Error al guardar"});
        console.log(result)
        return res.status(302).send({operacion:result});

        //deprecated
        /*operacion.save((err,operacionGuardada)=>{
            if (err) return res.status(500).send({message:"Error al guardar"});
            if(!operacionGuardada) return res.status(404).send({message:'No se ha guardado la operacion'});
            
        })*/
        
    },


    async getResultados(req,res){

        const result= await Operations.find({}).sort().exec()
        if (!result) return res.status(500).send({message:"Error al recuparar los datos"});
        console.log(result)
        return res.status(200).send({result});
        /*
            Operations.find({}).sort().exec((err,peliculas)=>{
                if (err) return res.status(500).send({message:"Error al recuparar los datos"});
                if(!peliculas) return res.status(404).send({message:'No existen peliculas'});
                return res.status(200).send({peliculas});
            })*/
        



    },
    
}
module.exports=controller;