require("dotenv").config();
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    userId: {
      type: String,
    },
    author: {
      type: String,
    },
    chatroomId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
