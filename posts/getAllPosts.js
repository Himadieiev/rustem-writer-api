const { Post } = require("../models/posts");

async function getAllPosts(req, res, next) {
  try {
    const posts = await Post.find();

    console.log(posts);

    if (posts.length === 0) {
      return res.status(404).json({ message: "No posts" });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error getting Post:", error);
    res
      .status(500)
      .json({ message: "Error getting Post", error: error.message });
  }
}

module.exports = getAllPosts;
