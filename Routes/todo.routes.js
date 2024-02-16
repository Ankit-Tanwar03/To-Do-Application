const express = require("express")
const {createToDo} = require("../controllers/todo.controller")
const router = express.Router();

router.post("/api/todo/createToDo", createToDo)

module.exports = router;