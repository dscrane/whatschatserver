const express = require('express');
const { User } = require('../models/user');
const authenticate = require('../middleware/authenticate')

const router = new express.Router();

router.post('users/new', async (req, res) => {

})

router.post('users/login', async (req, res) => {

});

router.post('users/logout', authenticate, async (req, res) => {

})

router.patch('users/update', authenticate, async (req, res) => {

})

router.get('users/id', authenticate, (req, res) => {

})

router.post('users/delete', authenticate, async (req, res) => {

})




module.exports = router;
