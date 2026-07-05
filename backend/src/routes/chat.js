const express = require("express");

const router = express.Router();

const {
    createMessage,
    getMessages
} = require("../controllers/chatController");

router.post("/", createMessage);

router.get("/:room", getMessages);

module.exports = router;