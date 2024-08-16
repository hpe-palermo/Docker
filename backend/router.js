const express = require("express");
const router = express.Router();

let users = ["Henrique", "Paulo"];

router.get("/", (req, res) => {
    res.send("<h1>API on</h1>");
});

router.get("/users", (req, res) => {
    res.json({ users: users });
});

router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json({ users: users[id] });
});

module.exports = router;