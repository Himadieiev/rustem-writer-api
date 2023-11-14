const { Post } = require("../models/posts");

const deletePost = async (req, res, next) => {
  const postId = req.params.postId;

  try {
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully", deletedPost });
  } catch (error) {
    console.error("Error deleting Post:", error);
    res
      .status(500)
      .json({ message: "Error deleting Post", error: error.message });
  }
};

module.exports = deletePost;
