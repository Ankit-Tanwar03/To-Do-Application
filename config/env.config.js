require("dotenv").config()

const config = {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT
}

module.exports = config