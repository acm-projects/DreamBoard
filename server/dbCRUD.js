const express = require("express");
const recordRoutes = express.Router();
const serv = require('./server.js')

recordRoutes.route("/listings").get(async function (req, res)
{
    const dbConnect = getDb();
    dbConnect
      .collection("users")
      .find({}).limit(50)
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
       } else {
          res.json(result);
        }
      });
});