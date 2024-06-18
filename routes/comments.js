
const express = require('express');
const router = express.Router();

// dummy data
let comments = [
  { id: 1, postId: 1, text: 'First comment on the first post' },
  { id: 2, postId: 1, text: 'Second comment on the first post' },
  { id: 3, postId: 2, text: 'First comment on the second post' },
];

// GET all comments
router.get('/', (req, res) => {
  const postId = req.query.postId;
  let filteredComments = comments;
  if (postId) {
    filteredComments = comments.filter(comment => comment.postId == postId);
  }
  res.json(filteredComments);
});

// POST a new comment
router.post('/', (req, res) => {
  const { postId, text } = req.body;
  if (!postId || !text) {
    return res.status(400).json({ error: 'postId and text are required' });
  }
  const newComment = {
    id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1,
    postId,
    text,
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

module.exports = router;
