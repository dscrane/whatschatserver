const express = require('express');
const { User } = require('../models/user');
const authenticate = require('../middleware/authenticate')

const router = new express.Router();

router.get('/users/fetch', authenticate, (req, res) => {
  console.info('users/fetch hit')
  res.set('Content-Security-Policy', ['default-src *', 'img-src data:'])
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

router.post('/users/create', async (req, res) => {
  console.info('users/create hit')
  const user = new User(req.body);
  console.log(user)
  try {
    await user.save();
    const token = await user.generateAuthToken();
    await user.generateAvatar();
    res.send({ _id: user._id, user, token })
  } catch (e) {
    res.send({ error: e})
  }
})

router.post('/users/delete', authenticate, async (req, res) => {
  console.info('users/delete hit')
  try {
    await req.user.remove();
    res.send({ userDeleted: true })
  } catch (e) {
    res.send({ userDeleted: false })
  }
})







router.patch('/users/update', authenticate, async (req, res) => {
  console.info('users/update hit')
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password'];

  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

  if (!isValidUpdate) {
    return res.send({error: 'Invalid Updates'})
  }
  console.log(updates)
  try {
    updates.forEach(update => req.user[update] = req.body[update])
    await req.user.save();
    res.send(req.user)
  } catch (e) {
    console.error(e)
  }
})








module.exports = router;
