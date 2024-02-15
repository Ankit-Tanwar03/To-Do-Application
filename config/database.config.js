const mongoose = require("mongoose");
const config = require("./env.config");

const connectToDB = () => {
    mongoose.connect(config.MONGODB_URI)
    .then((conn) => {
            console.log(`Connected to DB: ${conn.connection.host}`) 
    })      
    .catch((error) => {
            console.log(error.message);
            process.exit(1)
        })
    }

module.exports = connectToDB    


    