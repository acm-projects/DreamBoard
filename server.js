const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

function queryBuilder(colors,styles,types,size)
{
  var baseQuery = styles.concat(" ", types, " ");
  var req = [];
  for (i in colors)
  {
    req.push(baseQuery.concat(colors[i]," "));
  };
  return req;
}

var myLogger = function (req, res, next)
{
  reqPrep = queryBuilder(["baby blue","sage green", "lemon yellow"], "Scandinavian", "Bookcases", 20);
  req.myLogger = "queries ==>  | ";
  for (i in reqPrep)
  {
    req.myLogger += "\"" + reqPrep[i] + "\" | ";
  };
  next();
};

app.use(myLogger);

app.get('/', function (req, res)
{
  res.send(req.myLogger);
});


var server = app.listen(port);