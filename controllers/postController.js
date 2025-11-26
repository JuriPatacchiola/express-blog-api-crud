const posts = require("../posts");

function index(req, res) {
    res.json(posts);
}