const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Por favor rellena tu nombre"],
    },
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Este correo no es válido"],
     unique: true,
      required: [true, "Por favor rellena tu correo"],
    },
    password: {
      type: String,
      required: [true, "Por favor rellena tu contraseña"],
    },
    age: {
      type: Number,
      required: [true, "Por favor rellena tu edad"],
    },  
    tokens: [],
    orderIds: [{ type: ObjectId, ref: "Order" }],
    wishList: [{ type: ObjectId, ref: 'Post' }],
  },
  { timestamps: true }
);
UserSchema.index({

    name: "text",
    
    });

const User = mongoose.model("User", UserSchema);

module.exports = User;