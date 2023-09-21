const { Schema, model } = require('mongoose');

const userProjectSchema = new Schema({
    title: String,
    category: String,
    isRunning: { type: Boolean, default: false }
},
{
    timestamps: true
});

const userProjectModel = new model('UserProject', userProjectSchema); // Die angabe der kollektion ist optional

module.exports = { userProjectSchema, userProjectModel };
