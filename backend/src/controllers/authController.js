const User = require("../models/User");

const syncUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            {
                clerkId: req.auth.userId,
            },
            {
                clerkId: req.auth.userId,
            },
            {
                upsert: true,
                new: true,
            }
        );

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = {
    syncUser,
};