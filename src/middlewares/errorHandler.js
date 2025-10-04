export const errorHandler = (err, req, res, next) => {
  console.error(`ERROR: ${req.method} ${req.originalUrl} → ${err.message}`);

  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }

  const status = err.status || 500;

  res.status(status).json({
    error: err.message || 'Internal Server Error',
  });
};
