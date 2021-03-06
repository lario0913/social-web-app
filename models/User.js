const {model, Schema} = require('mongoose')

// DEFINE THE SCHEMA
const userSchema = new Schema({
    username: String,
    password: String.apply,
    email: String,
    createdAt: String
})

// EXPORT THE MODEL BY GIVING IT A NAME AND PASSING THE SCHEMA ALONG
module.exports = model('User', userSchema)