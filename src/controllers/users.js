const express = require('express');
const { User } = require('../models/user');
const authenticate = require('../middleware/authenticate')

const router = new express.Router();

router.get('/users/fetch', authenticate, (req, res) => {
  console.info('users/fetch hit')
  res.set('Content-Security-Policy', ['default-src *', 'img-src data'])
  res.send({ _id: req.user._id, user: req.user })
})

router.post('/users/login', async (req, res) => {
  console.info('users/login hit')
  try {
    const user = await User.findByCredentials(req.body.username, req.body.password);
    const token = await user.generateAuthToken()

    res.send({ user, token })
  } catch(e) {
    console.log(e)
  }
});

router.post('/users/logout', /*authenticate,*/ async (req, res) => {
  console.info('users/logout hit')
  try {
    req.user.tokens = [];
    await req.user.save();

    res.send({logout: true});
  } catch (e) {
    res.send({logout: false})
  }
})






router.post('/users/new', async (req, res) => {
  console.info('users/new hit')
  res.send('users/new hit')
})





router.patch('/users/update', /*authenticate,*/ async (req, res) => {
  console.info('users/update hit')
  res.send('users/update hit')
})



router.post('/users/delete', /*authenticate,*/ async (req, res) => {
  res.send('users/delete hit')
})




module.exports = router;
