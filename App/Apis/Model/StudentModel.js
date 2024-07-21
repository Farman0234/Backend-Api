const mongoose = require('mongoose');
mongoose.pluralize(null);

var studSchema = new mongoose.Schema({
    rollno: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    address: {type: String,},
    email: { type: String, required: true, unique: true }
});

const studentModel = mongoose.model('Students', studSchema);
module.exports = studentModel;
