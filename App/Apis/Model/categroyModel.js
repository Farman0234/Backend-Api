const mongoose = require('mongoose');
mongoose.pluralize(null);

const FileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    name: { type: String, required: true },
    path: { type: String, required: true },
    type: { type: String, required: true }
});

var categoryModel = mongoose.model('categories', FileSchema);
module.exports = categoryModel;
