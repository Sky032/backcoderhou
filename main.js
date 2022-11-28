const express = require ("express");
const app = express();
const Contenedor = require("./ClaseContenedor");

const PORT = process.env.PORT || 8080


app.get(`/productos`, async (req, res) => {
    try {
        const contenedorUno = new Contenedor("./productos.txt");
        const productos = await contenedorUno.getAll();
        console.log(`productos`);
        res.json((
            productos
            ));
        
    } catch (error) {
        console.log(error)
    }
});

app.get(`/productoRandom`, async (req, res) => {
    try {
        const contenedorUno = new Contenedor("./productos.txt");
        const producto = await contenedorUno.getRandomID();
        res.json((
            producto
        ))
    }
    catch (error) {
        console.log(error)
    }
    
});

const server = app.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
});

server.on(`error`, err=> console.log(err));