const Message = require("../models/Message");

// POST /chat
const createMessage = async (req, res) => {
    try {

        const message = await Message.create(req.body);

        res.status(201).json(message);//201 for created

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
};

// GET /chat/:room
const getMessages = async (req, res) => {
    try {

        const messages = await Message.find({
            room: req.params.room
        }).sort({
            createdAt: 1
        });

        res.json(messages);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
};

module.exports = {
    createMessage,
    getMessages
};