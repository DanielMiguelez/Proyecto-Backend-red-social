const express = require("express");
const router = express.Router();
const PostController = require('../controllers/PostController');
const { authentication } = require("../middlewares/authentication");

router.post("/createPost",authentication,PostController.createPost)
router.put("/updatePost/:_id",authentication,PostController.updatePost)
router.delete("/deletePost/:_id",authentication,PostController.deletePost)
router.get("/getPostsByName/:name",PostController.getPostsByName)
router.get("/getPostsById/:_id",PostController.getPostsById)
router.put('/likes/:_id', authentication, PostController.like);
router.get('/getAll',PostController.getAll)
router.put("/deleteLike/:_id",authentication, PostController.deleteLike)
router.get("/getPostsById/:_id",PostController.getPostsById)
module.exports = router;