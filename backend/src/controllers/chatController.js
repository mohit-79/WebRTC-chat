const Message = require("../models/Message");

// POST /chat
const createMessage = async (req, res) => {
    try {
        console.log("POST /chat reached");
        // console.log("auth:", req.auth);
        console.log("typeof auth:", typeof req.auth);

if (typeof req.auth === "function") {
    console.log("auth() =>", req.auth());
}
        console.log("body:", req.body);

        // const message = await Message.create(req.body); //before clerk auth
        const message = await Message.create({

        sender: req.auth().userId,

        room: req.body.room,

        text: req.body.text

    });
        console.log("POST /chat reached");
        console.log("auth:", req.auth);
        console.log("body:", req.body);
        
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
        const room = req.params.room;
        const before = req.query.before;
        const limit = parseInt(req.query.limit) || 20;
        //query obj
        const query = {
            room: room
        };
        // modify query
        if(before){
            query._id = {
                $lt: before
            };
        }
        // const messages = await Message.find({
        //      room: req.params.room
           
        // }).sort({
            // createdAt: 1
        // });
        const messages = await Message.find(query)
        .sort({ _id: -1 })
        .limit(limit);
        res.json(messages);

    } catch (err) {
        console.error(err);   // <-- add this
        res.status(500).json({
            error: err.message
        });

    }
};

module.exports = {
    createMessage,
    getMessages
};