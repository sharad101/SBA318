
const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST a new user
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
