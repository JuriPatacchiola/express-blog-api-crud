const posts = require("../data/posts");


function index(req, res) {
    const { tag } = req.query;

    if (tag) {
        const filtered = posts.filter(post =>
            post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
        );

        return res.json(filtered);
    }

    res.json(posts);
}



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

function update(req, res) {
    const { id } = req.params;
    res.send(`Aggiornamento del post ${id}`);
}


function destroy(req, res) {
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
}


module.exports = {
    index,
    show,
    store,
    update,
    destroy
};