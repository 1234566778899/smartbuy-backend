const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: String,
    lname_p: String,
    lname_m: String,
    username: String,
    password: String,
    email: String
}, {
    timestamps: true
})

module.exports = model('user', UserSchema)