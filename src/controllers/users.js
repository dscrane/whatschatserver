const express = require('express');
const { User } = require('../models/user');
const authenticate = require('../middleware/authenticate')

const router = new express.Router();

router.post('/users/new', async (req, res) => {
  console.info('users/new hit')
})

router.post('/users/login', async (req, res) => {
  console.info('users/login hit')
});

router.post('/users/logout', /*authenticate,*/ async (req, res) => {
  console.info('users/logout hit')
})

router.patch('/users/update', /*authenticate,*/ async (req, res) => {
  console.info('users/update hit')
})

router.get('/users/fetch', /*authenticate,*/ (req, res) => {
  console.info('users/fetch hit')
})

router.post('/users/delete', /*authenticate,*/ async (req, res) => {
  console.info('users/delete hit')
})




module.exports = router;
