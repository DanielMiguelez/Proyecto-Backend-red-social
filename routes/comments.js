const express = require("express");
const router = express.Router();
const CommentController = require('../controllers/CommentController');
const { authentication } = require("../middlewares/authentication");

router.post("/createComment/:_id",authentication,CommentController.createComment)
router.put("/updateCommentById/:_id",authentication,CommentController.updateCommentById)

module.exports = router;