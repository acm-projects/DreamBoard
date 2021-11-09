// server.js
const express = require('express');
const app = express();

const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./server.env"});
const connectionString = process.env.MONGO_CONN;

connectToServer(function (err)
{
    if (err)
    {
        console.error(err);
        process.exit();
    };
    app.listen(3000, () =>
    {
        console.log("Server is running on port: 3000");
    });
});

function getDb ()
{
    return dbConnection;
}

function connectToServer (callback)
{
    const client = new MongoClient(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    client.connect(function (err, db)
    {
        if (err || !db)
        {
        return callback(err);
        }

        dbConnection = db.db("test");
        console.log("Successfully connected to MongoDB.");

        return callback();
    });
}

// const recordRoutes = express.Router();
app.get("/listings", function (req, res)
{
    const dbConnect = getDb();
    dbConnect
    .collection("users")
    .find({}).limit(50)
    .toArray(function (err, result)
    {
        if (err)
        {
            res.status(400).send("Error fetching listings!");
        }
        else
        {
            res.json(result);
        }
    });
});