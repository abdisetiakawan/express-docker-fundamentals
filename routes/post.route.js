const express = require("express");
const {
  getAllPosts,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");
const protect = require("../middleware/auth.middleware");

const router = express.Router();

router.route("/").get(protect, getAllPosts).post(protect, createPost);

router
  .route("/:id")
  .get(protect, getOnePost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
