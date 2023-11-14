const express = require("express");

const getAllPosts = require("../../posts/getAllPosts");
const addPost = require("../../posts/addPost");
const deletePost = require("../../posts/deletePost");
const updatePost = require("../../posts/updatePost");

const hendleJwtControler = require("../../middlewares/hendleJwtControler");

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", hendleJwtControler, addPost);

router.delete("/:postId", hendleJwtControler, deletePost);

router.patch("/:postId", hendleJwtControler, updatePost);

module.exports = router;
