// backend/src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => res.json({ ok: true }));
app.post("/echo", (req, res) => {
    res.json({
        youSent: req.body
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));

console.log(process.env.PORT + "HELLO");