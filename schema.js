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
            emailID: "testuser@gmail.com",
            password: "totallySecurePassword"
        }

        const col = db.collection("users");
        // await addUser(userData,col);
        const user = await getUser(userData.emailID,col);
        // const p = await deleteUser(user, col);
        //col.find();

        var furnCol = db.collection('furnitures');

        var pieceData = {
            source: "IKEA",
            title: "test",
            link: "test",
            thumbnail: "test",
            price: 19
        };

        var pieceID = await addFurniture(pieceData, furnCol)._id;

        var collectionData = {
            title: "test",
            pieces: [pieceID]
        };

        var collCol = db.collection('collections');
        var collectionID = await addCollection(userData.emailID, collectionData, collCol, col)._id;

        console.log(collectionID);

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

async function addFurniture(pieceData, col) 
{
    return col.insertOne(pieceData);
}

async function getFurniture(title, col) 
{
    return col.findOne({title: title});
}

async function deleteFurniture(id, col) 
{
    return col.deleteOne(id);
}

async function addCollection(email, collectionData, collCol, userCol) 
{
    var collectionID = collCol.insertOne(collectionData, collCol)._id;
    var collections = userCol.findOne({emailID: email});
    console.log(collections);
    collections.push(collectionID);
    var returnData = userCol.updateOne({emailID: email},
    {
        $set: {
            collections: collections
        }
    });
    return returnData;
}

async function getCollection(title, col) 
{
    return col.findOne({title: title});
}

async function deleteCollection(id, col) 
{
    return col.deleteOne(id);
}

startDB().catch(console.dir);

module.exports = 
{
    startDB,
    addUser,
    deleteUser,
    getUser,
    addCollection,
    getCollection,
    deleteCollection,
    addFurniture,
    getFurniture,
    deleteFurniture,
    client
};