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

