const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');  // Necesario para manejar las rutas de archivos

const app = express();
const port = 3000;

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public')); // Archivos estáticos como CSS, JS, imágenes

// Ruta para servir tu página principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para procesar el envío del formulario
app.post('/send-email', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Configurar Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  
            pass: process.env.EMAIL_PASS
        }
    });

    // Configurar correo
    let mailOptions = {
        from: email,
        to: 'adrian.suarez@beincloud.net', // el correo a donde quieres que lleguen los mensajes
        subject: subject,
        text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error al enviar el correo');
        }
        console.log('Correo enviado: ' + info.response);
        res.send('Correo enviado con éxito');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


// Iniciar el servidor


