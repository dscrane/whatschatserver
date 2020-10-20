const express = require('express');
const { ChatRoom } = require('../models/chatroom')
const Message = require('../models/message')

const router = express.Router();


router.get('/rooms/fetch', async (req, res) => {
  console.info('rooms/fetch hit')
})

router.post('/rooms/create', async (req, res) => {
  console.info('rooms/create hit')
})

router.post('/rooms/delete', (req, res) => {
  console.info('rooms/delete hit')
})



module.exports = router;
