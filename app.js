const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/data', (req, res) => {
    const sampleData = {
        message: "Hola, este es un ejemplo de datos desde el servidor."
    };
    res.json(sampleData);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
