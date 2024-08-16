const express = require("express");
const router = express.Router();


let users = [
    { name: "Henrique", email: "henrique@gmail.com" },
    { name: "Paulo", email: "paulo@gmail.com" }
];

router.get('/users', (req, res) => {
    res.json({ users });
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ user: users[id] });
});

router.post('/create', (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: "Nome e email são necessários." });
        }
        users.push({ name, email });
        res.json({ success: "Usuário adicionado!!!\n" });
        console.log(users);
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
});

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (id >= 0 && id < users.length) {
        users[id] = { name, email };
        console.log(users[id])
        res.json({ success: "Usuário atualizado!!!\n" });
    } else {
        res.status(500).json({ error: "Erro interno do servidor." });
    }
});

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    if (id >= 0 && id < users.length) {
        users.splice(id, 1);
        res.json({ success: "Usuário removido!!!\n" });
    } else {
        res.status(500).json({ error: "Erro interno do servidor." });
    }
});

module.exports = router;