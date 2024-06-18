
const loggingMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call next middleware or route handler
  };
  
  const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
  };
  
  module.exports = {
    loggingMiddleware,
    errorMiddleware,
  };
  