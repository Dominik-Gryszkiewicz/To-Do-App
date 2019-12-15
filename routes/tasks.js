const express = require('express');
const router = express.Router();

router.get('/', async (req, rex) => {
  const tasks = await Task.find();
  res.send(genres);
})