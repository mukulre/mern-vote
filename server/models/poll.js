const mongoose = require('mongoose');
const user = require('./user');

const optionsSchema = new mongoose.Schema({
    option: String,
    votes: {
        type: Number, 
        default: 0
    }
});

const pollSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: String,
    options: [optionsSchema],
    voted:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Poll', pollSchema);