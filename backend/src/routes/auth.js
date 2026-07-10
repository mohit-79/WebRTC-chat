const express = require("express");

const router = express.Router();

const { requireAuth } = require("../middleware/clerkAuth");

const { syncUser } = require("../controllers/authController");

router.post("/sync", requireAuth(), syncUser);

module.exports = router;