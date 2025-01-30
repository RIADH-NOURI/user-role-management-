export const handleError = (res, error, message) => {
    console.error(error);
    res.status(500).json({ message: message || "An unexpected error occurred." });
  };
  