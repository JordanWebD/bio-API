const mongoose = require("mongoose");

const bioSchema = new mongoose.Schema({
    user: String,
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model("bio", bioSchema);