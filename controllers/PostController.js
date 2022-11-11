const Post = require("../models/Post");


const PostController = {
    async createPost(req, res) {
      try {
        console.log(req.body)
        const post = await Post.create(req.body);
        res.status(201).send(post);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .send({ msg: "Ha habido un problema creando el post", error });
      }
    },

    async updatePost(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
          );
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
}

module.exports = PostController;