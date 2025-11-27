const express = require("express");
const app = express();
const postsRouter = require("./routers/posts");
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server attivo! Benvenuto nell'API dei post!");
});

app.use("/posts", postsRouter);

app.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
});
