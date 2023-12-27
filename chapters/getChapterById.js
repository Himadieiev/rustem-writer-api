const { Chapter } = require("../models/chapters");

const getChapterById = async (req, res, next) => {
  const chapterId = req.params.chapterId;

  try {
    const chapter = await Chapter.findById(chapterId);

    if (!chapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }

    res.status(200).json(chapter);
  } catch (error) {
    console.error("Error getting Chapter by ID:", error);
    res
      .status(500)
      .json({ message: "Error getting Chapter by ID", error: error.message });
  }
};

module.exports = getChapterById;
