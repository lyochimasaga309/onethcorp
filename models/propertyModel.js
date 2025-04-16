const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    location: String,
    propertyType: { type: String, enum: ['rent', 'sale', 'hote', 'restaurant']},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;