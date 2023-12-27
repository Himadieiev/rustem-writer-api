const { Chapter } = require("../models/chapters");

const getAllChapters = async (req, res, next) => {
  try {
    const chapters = await Chapter.find();

    if (chapters.length === 0) {
      return res.status(404).json({ message: "No chapters" });
    }

    res.status(200).json(chapters);
  } catch (error) {
    console.error("Error getting Chapters:", error);
    res
      .status(500)
      .json({ message: "Error getting Chapters", error: error.message });
  }
};

module.exports = getAllChapters;
