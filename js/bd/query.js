
const { conexion } = require("./conexion")

function obtenerPreguntas(callback) {
    const callTable_preguntas = "SELECT * FROM preguntas";

    conexion.query(callTable_preguntas, function(err, resultados) {
        if (err) {
            throw err;
        } else {
            callback(resultados);
        }
    });
}

const sta= obtenerPreguntas(function(listaDePreguntas) {
    // Aquí puedes usar la lista de preguntas
    console.log(listaDePreguntas);
});
console.log(sta)
 conexion.end();


module.exports = {sta};

