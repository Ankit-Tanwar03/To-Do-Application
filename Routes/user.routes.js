const express = require("express")
const {createUser, loginUser, deleteUser, getUsers} = require("../controllers/user.controller");
const router = express.Router();

router.post("/api/user/createUser", createUser)
router.post("/api/user/loginUser", loginUser)
router.get("/api/user/getUsers", getUsers)
router.delete("/api/user/deleteUser/:id", deleteUser)

module.exports = router;