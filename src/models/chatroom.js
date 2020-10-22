require("dotenv").config();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Chatroom = mongoose.model("ChatRoom", chatroomSchema);
module.exports = { Chatroom, chatroomSchema };
