const express = require("express");
const cors = require("cors");
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.use(express.json());

app.listen(3000, () => {
    console.log("Server running in http://localhost:3000");
});
