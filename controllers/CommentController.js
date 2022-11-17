const Comment = require("../models/Comment");
const Post = require("../models/Post");

const CommentController = {
    async createComment(req, res) {
      try {
        const comment = await Comment.create({ ...req.body, userId: req.user._id });
        console.log(comment)
        await Post.findByIdAndUpdate(req.params._id, {
          $push: {commentIds: comment._id },
        });
        res.status(201).send(comment);
      } catch (error) {
        console.error(error)
        res.status(500).send({ msg: 'Error while posting your comment' })
    }
    },

    async updateComment(req, res) {
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
          const comment = await Comment.find()
            //.populate("comments.userId")
            .populate("userId")
          res.send(comment);
        } catch (error) {
          console.error(error);
        }
      },

      async deleteCommentById(req, res) {
        try {
          const comment = await Comment.findByIdAndDelete(req.params._id);
          res.send({ comment, message: "comment deleted" });
        } catch (error) {
          console.error(error);
          res.status(500).send({
            message: "there was a problem trying to remove the comment",
          });
        }
      },

      async like(req, res) {
        try {
          const comment = await Comment.findByIdAndUpdate(
            req.params._id,
            { $push: { likes: req.user._id } },
            { new: true }
          );
          await Comment.findByIdAndUpdate(req.user._id, { new: true });
          res.send(comment);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem with your like" });
        }
      },

      async deleteLikeById(req, res) {
        try {
          const comment = await Comment.findByIdAndUpdate(
            req.params._id,
            { $pull: { likes: req.user._id } },
            { new: true }
          );
          await Comment.findByIdAndUpdate(req.user._id, { new: true });
          res.send(comment);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem removing your like" });
        }
      },
}

module.exports = CommentController;