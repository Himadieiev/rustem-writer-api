const express = require("express");

const getAllChapters = require("../../chapters/getAllChapters");
const getChapterById = require("../../chapters/getChapterById");

const hendleJwtControler = require("../../middlewares/hendleJwtControler");

const router = express.Router();

router.get("/", hendleJwtControler, getAllChapters);
router.get("/:chapterId", hendleJwtControler, getChapterById);

module.exports = router;
