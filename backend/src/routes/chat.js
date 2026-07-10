const express = require("express");

const router = express.Router();

const {
    createMessage,
    getMessages
} = require("../controllers/chatController");
const {
    requireAuth
} = require("../middleware/clerkAuth");

// router.post("/", createMessage); //before clerk
router.get("/:room", requireAuth, getMessages);
router.post("/", requireAuth, createMessage);


module.exports = router