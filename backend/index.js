const express = require('express');
const cors = require('cors');
const router = require('./router');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/', router);

const conn = mysql.createConnection({
    host: "localhost",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL!");

    // conn.query("CREATE DATABASE mydb", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
