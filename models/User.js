const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    phoneNumber: { type: String },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
