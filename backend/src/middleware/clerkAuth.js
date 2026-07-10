// backend/src/middleware/clerkAuth.js
const { clerkMiddleware, getAuth } = require("@clerk/express");

const requireAuth = (req, res, next) => {
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  next();
};

module.exports = { clerkMiddleware, requireAuth };