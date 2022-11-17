const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;
const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please fill in the name"],
    },
    body: {
      type: String,
      required: [true, "Please fill in the body"],
    },
    userId: {
      type: ObjectId,
      ref: 'User'
    },
    likes: [{ type: ObjectId }],

    commentIds: [{ type: ObjectId, ref: "Comment" }],

  },
  
  { timestamps: true }
);
PostSchema.index({

    name: "text",
    
    });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;