const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please fill in with your name"],
    },
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Email invalid"],
      unique: true,
      required: [true, "Please fill in with your email"],
    },
    password: {
      type: String,
      required: [true, "Please fill in with your password"],
    },
    age: {
      type: Number,
      required: [true, "Please fill in with your age"],
    },
    role: String,
    tokens: [],
    postIds: [{ type: ObjectId, ref: "Post" }],
    commentIds: [{ type: ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const user = this._doc;
  delete user.tokens;
  delete user.password;
  return user;
};

UserSchema.index({

  name: "text",
  
  });

const User = mongoose.model("User", UserSchema);

module.exports = User;
