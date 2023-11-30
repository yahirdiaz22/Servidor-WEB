const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuración para manejar datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para servir archivos estáticos (por ejemplo, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para procesar datos del formulario
app.post('/saludo', (req, res) => {
    const nombre = req.body.nombre || 'Invitado';
    res.json({ mensaje: `¡Hola, ${nombre}!` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor web iniciado en http://localhost:${PORT}`);
});
