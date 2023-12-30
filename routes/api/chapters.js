const express = require("express");

const getAllChapters = require("../../chapters/getAllChapters");
const getChapterById = require("../../chapters/getChapterById");
const addChapter = require("../../chapters/addChapter");

const hendleJwtControler = require("../../middlewares/hendleJwtControler");

const router = express.Router();

router.get("/", hendleJwtControler, getAllChapters);

router.get("/:chapterId", hendleJwtControler, getChapterById);

router.post("/", hendleJwtControler, addChapter);

module.exports = router;
