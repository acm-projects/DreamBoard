const { MongoClient } = require("mongodb");
const connectionString = process.env.MONGO_CONN;

let dbConnection;

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

module.exports =
{
  connectToServer,
  getDb: function ()
  {
    return dbConnection;
  }
};