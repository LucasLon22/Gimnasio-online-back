//PRIMERO CREAR EL SERVIDOR
//IMPORTAR CONEXION MONGODB
//Importacion del archivo de rutas y modelo usuario
//Importacion body-parser
//probamos la ruta




const express = require('express');
const app = express()


const archivobd = require('./conexion')

const rutasusuario = require('./rutas/usuario')

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

app.use('/api/usuario', rutasusuario)

app.get('/', (req, res) => {
    res.end('Bienvenido al servidor corriendo en puerto 5000')
})


//res: Argumento de respuesta HTTP a la función de middleware, denominado "res" por convención.
//req: Argumento de solicitud HTTP a la función de middleware, denominado "req" por convención.
//configurar nuestro servidor basico


app.listen(5000, function () {
    console.log('El servidor NODE de Lucas esta corriendo correctamente')
})