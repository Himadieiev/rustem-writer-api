const { Chapter, addPostSchema } = require("../models/chapters");

const addChapter = async (req, res, next) => {
  try {
    const { error, value } = addPostSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const newChapter = new Chapter({
      title: value.title,
      text: value.text,
      createdAt: new Date(),
    });

    const savedChapter = await newChapter.save();

    res.status(201).json(savedChapter);
  } catch (error) {
    console.error("Error adding Chapter:", error);
    res.status(500).json({ message: "Error adding Chapter" });
  }
};

module.exports = addChapter;
