const express = require("express");
const { Chatroom } = require("../models/chatroom");
const Message = require("../models/message");

const router = express.Router();

router.get("/chatrooms/fetch", async (req, res) => {
  try {
    const chatrooms = await Chatroom.find().limit(8);
    res.send({ chatrooms });
  } catch (e) {
    console.log(e);
  }
});

router.post("/chatrooms/create", async (req, res) => {
  const chatroom = new Chatroom(req.body);
  try {
    await chatroom.save();
    res.send({ chatroom });
  } catch (e) {
    console.error(e);
  }
});

router.post("/chatrooms/delete", (req, res) => {
  res.send("rooms/delete hit");
});

module.exports = router;
