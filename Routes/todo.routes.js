const express = require("express")
const {createToDo, updateToDo, deleteToDo, getAllTodo} = require("../controllers/todo.controller")
const router = express.Router();

router.post("/api/todo/createToDo", createToDo)
router.put("/api/todo/updateTodo/:id", updateToDo)
router.delete("/api/todo/deleteTodo/:id", deleteToDo)
router.get("/api/todo/getAllTodo", getAllTodo)

module.exports = router;