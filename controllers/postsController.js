const posts = require("../data/posts");

const index = (req, res) => {
    const { tag } = req.query;

    if (tag) {
        const filtered = posts.filter(post =>
            post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
        );

        return res.json(filtered);
    }

    res.json(posts);
};

const show = (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(post);
};

const store = (req, res) => {
    const postData = req.body;

    const newPost = {
        id: posts.length + 1,
        title: postData.title,
        content: postData.content,
        image: postData.image,
        tags: postData.tags || []
    };

    posts.push(newPost);

    res.status(201).json(newPost);
};

const update = (req, res) => {
    const postId = Number(req.params.id);
    const postData = req.body;

    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({
            error: true,
            message: "Not found!"
        });
    }

    post.title = postData.title;
    post.content = postData.content;
    post.image = postData.image;
    post.tags = postData.tags || post.tags;

    res.json(post);
};

const destroy = (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    posts.splice(index, 1);

    res.status(204).send();
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};
