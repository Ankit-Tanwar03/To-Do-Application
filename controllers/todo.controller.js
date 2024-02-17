const Task = require("../model/task.schema")
const ToDo = require ("../model/todo.schema")
const asyncHandler = require ("../utils/asyncHandler")
const customError = require ("../utils/customError")

exports.createToDo = asyncHandler (async (req,res) => {
    const{todo} = req.body

    if(!todo){
        throw new customError("Please enter todo", 400)
    }

    const newtodo = await ToDo.create({
        todo
    })

    res.status(200).json({
        success: true,
        message: "todo created",
        newtodo
    })
})

exports.updateToDo = asyncHandler (async (req,res) => {
    const updatedTodo = await ToDo.findByIdAndUpdate(req.params.id, req.body) 

    if(!updatedTodo){
        throw new customError("ToDo updation failed", 400)
    }

    res.status(200).json({
        success: true,
        updatedTodo
    })
})

exports.deleteToDo = asyncHandler (async (req,res) => {
    
    const deletedTodo = await ToDo.findByIdAndDelete(req.params.id) 

    if(!deletedTodo){
        throw new customError("ToDo deletion failed", 400)
    }

    const deleteTasks = await Task.deleteMany(Task.TodoID)
    if(!deleteTasks){
        throw new customError("Task deletion failed", 400)
    }

    res.status(200).json({
        success: true,
        deletedTodo,
        deleteTasks
    })
})

exports.getAllTodo = asyncHandler (async (req,res) => {
    const getTodo = await ToDo.find()

    if(!getTodo){
        throw new customError("No ToDo found", 400)
    }

    res.status(200).json({
        success: true,
        getTodo
    })
})

