// backend/src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const chatRoutes = require("./routes/chat");

const app = express();
const { clerkMiddleware } = require("./middleware/clerkAuth");

const authRoutes = require("./routes/auth");

//middlewares before route-handlers
app.use(cors());
app.use(express.json());//stores parsed json in req.body
app.use(clerkMiddleware());
app.use("/chat", chatRoutes);
app.get("/health", (req, res) => res.json({ ok: true }));
app.use("/auth", authRoutes);
app.post("/echo", (req, res) => {
    res.json({
        youSent: req.body
    });
});

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server on ${PORT}`)); //before mongo

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server on ${PORT}`);
    });
});
//after mongo


// console.log(process.env.PORT + "HELLO");