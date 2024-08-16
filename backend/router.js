const express = require("express");
const router = express.Router();

let users = [
    {
        name: "Henrique",
        email: "henrique@gmail.com"
    },
    {
        name: "Paulo",
        email: "paulo@gmail.com"
    }
];

router.get("/users", (req, res) => {
    res.json({ users: users });
});

router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json({ users: users[id] });
});

router.post("/create", (req, res) => {
    const { name, email } = req.body;
    users.push({ name, email });
    res.send("Usuário adicionado!!!\n")
});

router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (id >= 0 && id < users.length) {
        users[id] = { name, email };
        res.send("Usuário atualizado!!!");
    } else {
        res.status(404).send("Usuário não encontrado.");
    }
});

router.delete("/users/:id", (req, res) => {
    const { id } = req.params;

    if (id >= 0 && id < users.length) {
        users.splice(id, 1);
        res.send("Usuário removido!!!");
    } else {
        res.status(404).send("Usuário não encontrado.");
    }
});

module.exports = router;