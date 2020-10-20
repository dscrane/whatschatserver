const express = require('express');
const Message = require('../models/message')

const router = express.Router();

router.get('/messages/fetch', async (req, res) => {
  console.info('messages/fetch hit')
})

module.exports = router;
