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

exports.updateTask = asyncHandler (async (req,res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body) 

    if(!updatedTask){
        throw new customError("Task updation failed", 400)
    }

    res.status(200).json({
        success: true,
        updatedTask
    })
})

exports.deleteTask = asyncHandler (async (req,res) => {
    
    const deletedTask = await Task.findByIdAndDelete(req.params.id) 

    if(!deletedTask){
        throw new customError("Task deletion failed", 400)
    }

    res.status(200).json({
        success: true,
        deletedTask
    })
})

// exports.getAllTodo = asyncHandler (async (req,res) => {
//     const getTodo = await ToDo.find()

//     if(!getTodo){
//         throw new customError("No ToDo found", 400)
//     }

//     res.status(200).json({
//         success: true,
//         getTodo
//     })
// })