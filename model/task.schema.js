const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    task: {
        type: String
    },

    todoID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ToDo'
    }

},
{
    timestamps: true
})

module.exports = mongoose.model("Task", taskSchema)