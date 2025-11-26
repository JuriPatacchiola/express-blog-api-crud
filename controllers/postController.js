const posts = require("../posts");

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const { id } = req.params;
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(post);
}


function store(req, res) {
    res.send("Creazione di un nuovo post");
}