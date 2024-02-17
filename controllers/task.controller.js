const ToDo = require ("../model/todo.schema")
const Task = require ("../model/task.schema")
const asyncHandler = require ("../utils/asyncHandler")
const customError = require ("../utils/customError")

exports.createTask = asyncHandler (async (req,res) => {
    const {id: todoID} = req.params
    const {task} = req.body

    const existingToDo = await ToDo.findById(todoID)
    if(!existingToDo){
        throw new customError ("Enter a todo to create task", 400)
    }

    const newtask = await Task.create({
        task,
        todoID
    })

    res.status(200).json({
        success: true,
        message: "task created",
        newtask
    })
})