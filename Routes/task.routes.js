const express = require("express")
const {createTask} = require("../controllers/task.controller")
const router = express.Router();

router.post("/api/task/createTask/:id", createTask)

module.exports = router;