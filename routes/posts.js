const express = require("express");
const { Router } = require("express")
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
router.put('/insertComment/:_id',authentication,PostController.insertComment)

module.exports = router;