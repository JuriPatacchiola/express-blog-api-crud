const express = require("express");
const router = express.Router();


const {
    index,
    show,
    store,
    update,
    destroy
} = require("../controllers/postsController");


module.exports = router;
