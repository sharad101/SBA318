
const express = require('express');
const router = express.Router();

//dummy data
let posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post' },
];

// GET all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// POST a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const newPost = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT update an existing post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find(post => post.id === id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  post.title = title;
  post.content = content;
  res.json(post);
});

// DELETE a post
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(post => post.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }
  posts.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
