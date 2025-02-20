const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    const sampleData = {
        message: "Hola, este es un ejemplo de datos desde el servidor."
    };
    res.json(sampleData);
});

module.exports = router;
