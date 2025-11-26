const express = require("express");
const app = express();

app.use(express.json());

const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

app.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
});
