let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contact" //name of collection(table)
});

module.exports = mongoose.model('contact', contactModel);