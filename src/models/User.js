const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    dni: String,
    name: String,
    lname: String,
    username: String,
    password: String,
    email: String,
    monthly_income: Number
}, {
    timestamps: true
})

module.exports = model('user', UserSchema)