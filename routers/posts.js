const express = require("express");
const router = express.Router();


const posts = require("../posts");

router.get("/", (req, res) => {
    res.json(posts);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(post);
});

router.get("/", (req, res) => {
    res.send("Lista dei post");
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Dettagli del post ${id}`);
});

router.post("/", (req, res) => {
    res.send("Creazione di un nuovo post");
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Aggiornamento del post ${id}`);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = posts.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    const deletedPost = posts.splice(index, 1);

    res.json({
        message: "Post eliminato con successo",
        deleted: deletedPost[0]
    });
});


module.exports = router;
