require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser");
const connectToDB = require("./config/database.config");
const userRoutes = require("./Routes/user.routes")
const todoRoutes = require("./Routes/todo.routes")
const taskRoutes = require("./Routes/task.routes")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

connectToDB();
app.use("/", userRoutes)
app.use("/", todoRoutes)
app.use("/", taskRoutes)


module.exports = app;