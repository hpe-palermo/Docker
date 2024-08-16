const express = require('express');
const cors = require('cors');
const router = require('./router');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/', router);

let conn = mysql.createConnection({
    host: "localhost",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

conn.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
