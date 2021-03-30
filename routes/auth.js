const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  // ======= TODO: get the user w/email ========
  const user = {
    email: 'name@example.com  ',
    password: '$2b$10$6ieO.FytJ3LcH9juGU6oMeHYm.RR4lhEODdDFr4SIJsgrN2PgoicK', // 'password'
    id: '2',
  };
  // ===========================================

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.sendStatus(401);
  }

  const token = jwt.sign({
    userId: user.id
  }, 'REPLACE_THIS_SECRET');

  return res.send({
    token,
  });

});


router.post('/signup', async (req, res) => {

  const { email, password } = req.body;

  let hashedPassword = await bcrypt.hash(password, 10);

  // ========== TODO: create the user ==========
  const newUser = {
    email,
    password: hashedPassword,
    id: '1',
  };
  // ===========================================

  const token = jwt.sign({
    userId: newUser.id
  }, 'REPLACE_THIS_SECRET');

  return res.status(201).send({
    token,
  });

});

module.exports = router;