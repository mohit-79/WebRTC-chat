const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },

    name: String,

    avatar: String,

    bio: String,

    homeGroupCode: String,

},
{
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);