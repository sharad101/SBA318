
const express = require('express');
const { loggingMiddleware, errorMiddleware } = require('./middleware/middleware');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');

const app = express();
const port = 3000;

// Middleware setup
app.use(express.json()); // Parse JSON bodies automatically
app.use(loggingMiddleware); // Custom logging middleware

// Routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

// Error handling middleware (must be defined last)
app.use(errorMiddleware);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
