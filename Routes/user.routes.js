const express = require("express")
const {createUser, loginUser} = require("../controllers/user.controller");
const router = express.Router();

router.post("/api/user/createUser", createUser)
router.post("/api/user/loginUser", loginUser)

module.exports = router;