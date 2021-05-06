export default (req, res) => {
  res.status(404).json({
    error: 404,
    message:
      "Accessing the API though this method is not intended and will receive no support!",
  });
};
