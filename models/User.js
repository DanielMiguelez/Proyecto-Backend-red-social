const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String
  },
  { timestamps: true }
);
UserSchema.index({

    name: "text",
    
    });

const User = mongoose.model("User", UserSchema);

module.exports = User;