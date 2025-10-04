export const withErrorHandling = async (fn, errorMessage) => {
  try {
    return await fn();
  } catch (err) {
    console.error(`${errorMessage}:`, err.message);
    throw new Error(errorMessage);
  }
};
