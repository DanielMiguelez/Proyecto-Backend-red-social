const express = require("express");
const router = express.Router();
const CommentController = require('../controllers/CommentController');
const { authentication } = require("../middlewares/authentication");

router.post("/createComment/:_id",authentication,CommentController.createComment)
router.put("/updateComment/:_id",authentication,CommentController.updateComment)
router.get("/getAllComments",authentication,CommentController.getAllComments)
router.delete("/deleteCommentById/:_id",authentication,CommentController.deleteCommentById)
router.put('/likes/:_id', authentication, CommentController.like);
router.put("/deleteLikeById/:_id",authentication, CommentController.deleteLikeById)

module.exports = router