const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Configuração do Nodemailer
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'calibratechce@gmail.com',
        pass: process.env.EMAIL_PASS // Senha de app do Gmail
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, phone, company, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER || 'calibratechce@gmail.com',
        to: 'calibratechce@gmail.com',
        subject: `Novo contato do site - ${name}`,
        html: `
            <h2>Novo contato recebido pelo site</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
            <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Email enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ success: false, message: 'Erro ao enviar email' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});