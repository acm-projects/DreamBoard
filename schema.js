const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/Dreamboard');

const furnitureSchema = new Schema
({
    source: String,
    title:  String,
    link: String,
    thumbnail: String, // url
    price: Number
});
const collectionSchema = new Schema
({
    title:  String,
    pieces: Array // array of furnitureSchema
});
const userSchema = new Schema
({
    emailID: String,
    password: String,
    collections: Array // array of collectionSchema
});

const User = mongoose.model('User', userSchema);
const Collection = mongoose.model('Collection', collectionSchema);
const Furniture = mongoose.model('Furniture', furnitureSchema);

function save(saveData)
{
    const newPiece = new Furniture(saveData);
    newPiece.save;
    console.log("SAVED");
}

module.exports = 
{
    save
};