const express = require("express");
const cors = require("cors");
const router = require('./router');

const app = express();

app.use("/", router);
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Server running in http://localhost:3000");
});
