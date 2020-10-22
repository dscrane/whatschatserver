const express = require('express');
const Message = require('../models/message')

const router = express.Router();

router.get('/messages/fetch?', async (req, res) => {
  try {
    const messages = await Message.find({chatroomId: req.query.chatroomId}).limit(50).sort({createdAt: 1});
    res.set('Content-Security-Policy', 'default-src *')
    res.send({ chatroomId: req.query.chatroomId, messages: messages });
  } catch (e) {
    console.error(e)
  }
})

module.exports = router;
