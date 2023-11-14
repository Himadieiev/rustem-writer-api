const { Post, addPostSchema } = require("../models/posts");

const updatePost = async (req, res, next) => {
  const postId = req.params.postId;

  try {
    const { error, value } = addPostSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        title: value.title,
        text: value.text,
        date: value.date,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    console.error("Error updating Post:", error);
    res
      .status(500)
      .json({ message: "Error updating Post", error: error.message });
  }
};

module.exports = updatePost;
