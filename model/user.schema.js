const mongoose = require("mongoose")
const JWT = require("jsonwebtoken");
const config = require("../config/env.config");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email name is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
},
{
    timestamps: true
});

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

userSchema.methods = {
getJwtToken: function () {
        return JWT.sign({
            id: this.id,
            email: this.email
        },
        config.JWT_SECRET,
        {
            expiresIn: config.JWT_EXPIRY
        })
    },

comparePassword: async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password)
    }    
}



module.exports = mongoose.model("User", userSchema)