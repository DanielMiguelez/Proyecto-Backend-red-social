const Comment = require("../models/Comment");

const CommentController = {
    async createComment(req, res, next) {
      try {
        const comment = await Comment.create({...req.body,userId:req.user._id});
        res.status(201).send(comment);
      } catch (error) {
        console.error(error);
        next(error);
      }
    },


async updateCommentById(req, res) {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    res.send({ message: "Comment successfully updated", comment });
  } catch (error) {
    console.error(error);
  }
},

async getAllComments(req, res) {
  try {
    const comments = await Comment.find()
    res.send(comments);
  } catch (error) {
    console.error(error);
  }
},
}
    module.exports = CommentController;