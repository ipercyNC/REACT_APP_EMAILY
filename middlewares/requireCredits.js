module.exports = (req, res, next) => {
  if (req.user.credits <= 0) {
    // 403 Forbidden close to actual semantics of error
    return res.status(403).send({ error: 'Not enough credits'});
  }

  next();
};
