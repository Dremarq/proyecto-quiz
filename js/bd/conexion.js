const mysql= require ("mysql")

const conexion= mysql.createConnection({
    host:"localhost",
    database:"proyecto_quiz",
    user:"root",
    password:""
})

conexion.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("Conexion BD Exitosa")
    }
})

module.exports={
    conexion
}