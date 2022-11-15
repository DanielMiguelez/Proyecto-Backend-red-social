const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;
const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Por favor rellena el titulo del post"],
    },
    body: {
      type: String,
      required: [true, "Por favor rellena la descripcion"],
    },
    userId: {
      type: ObjectId,
      ref: 'User'
    },
    likes: [{ type: ObjectId }],

    comments:[{
      comment: String,
      userId:{type: ObjectId, ref:"User"} 
    }]
    
  },
  
  { timestamps: true }
);
PostSchema.index({

    name: "text",
    
    });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;