const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
    }

},
{
    timestamps: true
})

module.exports = mongoose.model("ToDo", todoSchema)