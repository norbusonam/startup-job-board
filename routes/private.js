const express = require('express');
const verifyAuth = require('../middleware/verifyAuth');

const router = express.Router();

router.get('/data', verifyAuth, (req, res) => {
  return res.send({
    msg: 'super private data'
  });
});

module.exports = router;