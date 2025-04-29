const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gymSchema = new Schema({
    gymName: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true
    },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    equipment: { type: [String], required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Gym', gymSchema);
