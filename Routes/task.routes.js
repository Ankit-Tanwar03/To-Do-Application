const express = require("express")
const {createTask, updateTask, deleteTask} = require("../controllers/task.controller")
const router = express.Router();

router.post("/api/task/createTask/:id", createTask)
router.put("/api/todo/updateTask/:id", updateTask)
router.delete("/api/todo/deleteTask/:id", deleteTask)
// router.get("/api/todo/getAllTodo", getAllTodo)

module.exports = router;