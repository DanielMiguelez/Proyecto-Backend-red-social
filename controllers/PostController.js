const Post = require("../models/Post");
const User = require("../models/User");


const PostController = {
  async createPost(req, res, next) {
    try {
      const post = await Post.create({ ...req.body, userId: req.user._id });
      await User.findByIdAndUpdate(req.user._id, {
        $push: { postIds: post._id },
      });
      res.status(201).send(post);
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async updatePost(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      res.send({ message: "Post successfully updated", post });
    } catch (error) {
      console.error(error);
    }
  },
  async deletePost(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);
      res.send({ post, message: "Post deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "there was a problem trying to remove the post",
      });
    }
  },
  async getPostsByName(req, res) {
    try {
      const posts = await Post.find({
        $text: {
          $search: req.params.name,
        },
      });
      res.send(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Ha habido un problema al traernos los posts",
        error,
      });
    }
  },

  async getPostsById(req, res) {
    try {
      const post = await Post.findById(req.params._id);
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Ha habido un problema al traernos post por Id",
        error,
      });
    }
  },

  async like(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { $push: { likes: req.user._id } },
        { new: true }
      );
      await User.findByIdAndUpdate(req.user._id, { new: true });

      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem with your like" });
    }
  },

  async deleteLike(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { $pull: { likes: req.user._id } },
        { new: true }
      );
      await User.findByIdAndUpdate(req.user._id, { new: true });

      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem with your like" });
    }
  },

  async getAll(req, res) {
    try {
      const { page = 1, limit = 5 } = req.query;
      const post = await Post.find()
        .populate("commentIds")
        .populate("userId")
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(post);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = PostController;
