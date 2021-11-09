const furnitureSchema = 
({
    source: String,
    title:  String,
    link: String,
    thumbnail: String, // url
    price: Number
});
const collectionSchema = 
({
    title:  String,
    pieces: Array // array of furnitureSchema
});
const userSchema = 
({
    emailID: String,
    password: String,
    collections: Array // array of collectionSchema
});

// const User = mongoose.model('User', userSchema);
// const Collection = mongoose.model('Collection', collectionSchema);
// const Furniture = mongoose.model('Furniture', furnitureSchema);



const { MongoClient } = require('mongodb');
require('dotenv').config({path:".env"});

const uri = process.env.MONGO_CONN;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function startDB()
{
    try
    {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db('test');
        console.log("done!");
        
        var userData =
        {
            emailID: "totallyrealperson@yesmail.com",
            password: "totallySecurePassword"
        }

        const col = db.collection("users");
        await addUser(userData,col);
        const user = await getUser(userData.emailID,col);
        const p = await deleteUser(user, col);
        col.find();

        console.log(p);

    }
    catch (err)
    {
        console.log(err.stack);
    }
    finally
    {
        await client.close();
    }
}

async function addUser(userData,col)
{
    userData['collections'] = [null];
    return col.insertOne(userData);
}

async function deleteUser(id,col)
{
    return col.deleteOne(id);
}

async function getUser(email,col)
{
    return col.findOne({emailID: email});
}

startDB().catch(console.dir);

module.exports = 
{
    startDB
};