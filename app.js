const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
    const sampleData = {
        message: "Holi, este es un ejemplo de datos desde el servidor."
    };
    res.json(sampleData);
});

app.post('/auth', (req, res) => {
    const { username, password } = req.body;
    if (username === 'usuario' && password === 'contraseña') {
        res.send('Login exitoso');
    } else {
        res.send('Usuario o contraseña incorrectos');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
