const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    tasks: {
        type: String,
    }
})

module.exports = mongoose.model("ToDo", todoSchema)