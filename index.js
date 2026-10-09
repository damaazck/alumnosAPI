const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));
app.get('/alumnos', (req, res) => {
    const datos = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8')
    );

    res.json(datos.alumnos);
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});