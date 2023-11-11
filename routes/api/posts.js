const express = require("express");

const getAllPosts = require("../../posts/getAllPosts");
const addPost = require("../../posts/addPost");
// const deleteTask = require("../../tasks/deleteTask");
// const updateTask = require("../../tasks/updateTask");

const hendleJwtControler = require("../../midlewares/hendleJwtControler");
// const getAllTaskSometimes = require("../../tasks/getAllTaskSometimes");

const router = express.Router();

// router.get("/", hendleJwtControler, getAllTaskSometimes);

router.get("/:date", hendleJwtControler, getAllPosts);

router.post("/", hendleJwtControler, addPost);

// router.delete("/:taskId", hendleJwtControler, deleteTask);

// router.patch("/:taskId", hendleJwtControler, updateTask);

module.exports = router;
