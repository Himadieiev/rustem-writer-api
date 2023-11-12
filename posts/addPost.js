const { Post, addPostSchema } = require("../models/posts");

const addPost = async (req, res, next) => {
  try {
    const { error, value } = addPostSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const newPost = new Post({
      title: value.title,
      text: value.text,
      date: value.date,
      createdAt: new Date(),
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error adding Post:", error);
    res.status(500).json({ message: "Error adding Post" });
  }
};

module.exports = addPost;
