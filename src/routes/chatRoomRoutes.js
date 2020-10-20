const express = require('express');
const { ChatRoom } = require('../models/chatRoom')
const Message = require('../models/message')

const router = express.Router();


router.get('rooms/fetch', async (req, res) => {
  try {
    const chats = await ChatRoom.find().limit(8);
    res.send({ chats });
  } catch (e) {
    console.error(e)
  }
})

router.post('rooms/create', async (req, res) => {
  console.log(req.body)
  const chat = new ChatRoom (req.body);
  try {
    await chat.save()
    res.send({ chat })
  } catch (e) {
    console.error(e)
  }
})

router.post('rooms/delete', (req, res) => {
  console.log('delete')
})



module.exports = router;
