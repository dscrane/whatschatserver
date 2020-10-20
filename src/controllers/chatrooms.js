const express = require('express');
const { ChatRoom } = require('../models/chatroom')
const Message = require('../models/message')

const router = express.Router();


router.get('rooms/fetch', async (req, res) => {

})

router.post('rooms/create', async (req, res) => {

})

router.post('rooms/delete', (req, res) => {

})



module.exports = router;
