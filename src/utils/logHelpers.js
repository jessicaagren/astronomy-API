export const logSuccess = (req, message = '') => {
  console.log(
    `SUCCESS: ${req.method} ${req.originalUrl}${message ? ' ' + message : ''}`
  );
};

export const logError = (req, error, message = '') => {
  console.error(
    `ERROR: ${req.method} ${req.originalUrl}${message ? ' ' + message : ''} | ${
      error.message
    }`
  );
};

export const logWarn = (req, message = '') => {
  console.warn(
    `WARN: ${req.method} ${req.originalUrl}${message ? ' ' + message : ''}`
  );
};
