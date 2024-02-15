const User = require("../model/user.schema");
const app = require ("../app");
const asyncHandler = require ("../utils/asyncHandler");
const customError = require ("../utils/customError");
const cookieOptions = require("../services/cookieOptions");

exports.createUser = asyncHandler(async (req, res) => {
    const {firstName, lastName, email, password} = req.body

    if(!firstName || !lastName || !email || !password){
        throw new customError("All fields are required", 400)
    }

    const existingUser = await User.findOne({email})
    if(existingUser){
        throw new customError("user already exists", 400)
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password
    })

    const token = user.getJwtToken();
    
    user.password = undefined

    res.cookie("token", token, cookieOptions)

    res.status(200).json({
        success: true,
        token,
        user
    })

})

exports.loginUser = asyncHandler (async (req,res) => {
    const {email, password} = req.body

    if(!email || !password){
        throw new customError("All fields are required", 400)
    }

    const user = await User.findOne({email})

    if(!user){
        throw new customError("User doesn't exist", 400)
    }

    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        throw new customError("Credentials don't match")
    }

    const token = user.getJwtToken();
    user.password = undefined

    res.cookie("token", token, cookieOptions)

    res.status(200).json({
        success: true,
        message: "Login sucessfull",
        user,
        token
    })

})