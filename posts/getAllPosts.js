const { Post } = require("../models/posts");

async function getAllPosts(req, res, next) {
  try {
    const taskdate = req.params.date;

    const posts = await Post.find({
      owner: req.user._id,
      date: { $regex: taskdate, $options: "i" },
    }).populate("owner", "avatarURL");
    res.send(posts);
  } catch (error) {
    console.error("Error adding Post:", error);
    res.status(500).json({ message: "Error adding Post" });
  }
}

module.exports = getAllPosts;
