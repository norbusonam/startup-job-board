const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send({
      msg: 'Email does not exist'
    })
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(404).send({
      msg: 'Wrong password'
    })
  }

  const token = jwt.sign({
    userId: user.id
  }, proccess.env.TOKEN_SECRET);

  return res.send({
    token,
  });

});


router.post('/signup', async (req, res) => {

  const { email, password } = req.body;

  let hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ 
    email,
    password: hashedPassword
   });

  const token = jwt.sign({
    userId: newUser.id
  }, proccess.env.TOKEN_SECRET);

  return res.status(201).send({
    token,
  });

});

module.exports = router;