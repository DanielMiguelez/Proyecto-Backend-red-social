const express = require("express");
const { Router } = require("express")
const router = express.Router();
const PostController = require('../controllers/PostController');

router.post("/createPost",PostController.createPost)
router.put("/updatePost/:_id",PostController.updatePost)
router.delete("/deletePost/:_id",PostController.deletePost)

router.get("/getPostsByName/:name",PostController.getPostsByName)
router.get("/getPostsById/:_id",PostController.getPostsById)

module.exports = router;