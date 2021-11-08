// New User: POST TO US
//     Frontend sends a user object to Backend
//     Backend saves to MongoDB, returns a status
//     Frontend shows user as logged in if successful
// Login: GET FROM US
//     Frontend sends creds
//     Backend checks creds
//     Backend sends result to Frontend
//     Frontend either gives or denies further access, cycle
// Forgot password: POST TO US
//     Frontend asks for email, sends to backend
//     If email exists, backend sends email
//     Frontend only displays message and link to login, no check if exists
// User queries: GET FROM US AND POST TO US
//     Frontend gets and sends query to backend
//     Backend processes and returns a list
//     Frontend displays
//     Frontend returns saved objects (bookmarked by user)
//     Backend saves objects to MongoDB in collection
// User checks saved: GET FROM US
//     Frontend shows Collection names
//     Frontend requests a collection’s data when clicked
//     Backend sends collection info
//     Frontend displays
//     Frontend returns any changes (deletions only)

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000;

// var myLogger = function (req, res, next)
// {
  
// };

// app.use(myLogger);

// app.get('/', function (req, res)
// {
//   res.send(req.myLogger);
// });


// var server = app.listen(port);

const express = require('express');
const APIs = require('./APIs.js');
const Scrapers = require('./Scrapers.js');
var app = express();

async function requestNFM (req, res, next)
{
    var query = req.query.query;
    var size = req.query.size;

    var getNFM = await Scrapers.nfmScrape(query, size);
    var title = "NFM";

    if (getNFM == 0)
    {
        req.requestNFM = "No items from NFM";
    };
    var response = {};
    response[title] = [];
    for (i in getNFM)
    {
        response[title][i] = [getNFM[i]['key'],getNFM[i]['value'][0],getNFM[i]['value'][1],getNFM[i]['value'][2]];
    }

    req.requestNFM = formatResponse(response,title);
    next();
}

async function requestIKEA (req, res, next)
{
    var query = req.query.query;
    var size = req.query.size;

    var getIKEA = await Scrapers.ikeaScrape(query, size);
    var title = "IKEA";

    if (getIKEA == 0)
    {
        req.requestIKEA = "No items from NFM";
    };

    var response = {};
    response[title] = [];
    for (i in getIKEA)
    {
        response[title][i] = [getIKEA[i]['key'],getIKEA[i]['value'][0],getIKEA[i]['value'][1],getIKEA[i]['value'][2]];
    }

    req.requestIKEA  = formatResponse(response,title);
    next();
}

async function requestWalmart(req, res, next)
{
    var query = req.query.query;
    var size = req.query.size;

    var getWAL = await APIs.walmartProducts(query,size);
    var title = "Walmart";

    if (getWAL == 0)
    {
        req.requestWalmart = "No items from Walmart"
    };

    var response = {};
    response[title] = [];
    for (i in getWAL)
    {
        var price = "$" + (getWAL[i]['primary_offer']['offer_price']);
        response[title][i] = [getWAL[i]['title'],getWAL[i]['product_page_url'],getWAL[i]['thumbnail'],price];
    }

    req.requestWalmart = formatResponse(response,title);
    next();
}

async function requestGoogle(req, res, next)
{
    var query = req.query.query;
    var size = req.query.size;

    var getGOO = await APIs.googleProducts(query,size);
    var title = "Google";

    if (getGOO == 0)
    {
        req.requestGoogle = "No items from Google"
    };

    var response = {};
    response[title] = [];
    for (i in getGOO)
    {
        response[title][i] = [getGOO[i]['title'],getGOO[i]['link'],getGOO[i]['thumbnail'],getGOO[i]['price']];
    }

    req.requestGoogle = formatResponse(response,title);
    next();
}

async function requestHomeDepot(req, res, next)
{
    var query = req.query.query;
    var size = req.query.size;

    var getHOM = await APIs.homeDepotProducts(query,size);
    var title = "HomeDepot";

    if (getHOM == 0)
    {
        req.requestHomeDepot = "No items from Home Depot"
    };

    var response = {};
    response[title] = [];
    for (i in getHOM)
    {
        var price = "$" + (getHOM[i]['price']);
        response[title][i] = [getHOM[i]['title'],getHOM[i]['serpapi_link'],getHOM[i]['thumbnails'][0][0],price];
    }

    req.requestHomeDepot = formatResponse(response,title);
    next();
}

async function requestEtsy(req, res, next)
{
    var query = req.query.query;
    var size = req.query.size;

    var getETSY = await APIs.etsyProducts(query,size);
    var title = "Etsy";

    if (getETSY == 0)
    {
        req.requestEtsy = "No items from Etsy"
    };

    var response = {};
    response[title] = [];
    for (i in getETSY)
    {
        var getThumbnail = await APIs.etsyThumbnail(getETSY[i]['listing_id'],getETSY[i]['shop_id']);
        var price = "$" + (getETSY[i]['price']['amount'] / getETSY[i]['price']['divisor']);
        response[title][i] = [getETSY[i]['title'],getETSY[i]['url'],getThumbnail,price];
    }

    req.requestEtsy = formatResponse(response,title);
    next();
}

function formatResponse(response,title)
{
    var pieces = [];
    for (i in response[title])
    {
        var furniturePiece = 
        {
            source: title,
            title: response[title][i][0],
            link: response[title][i][1],
            thumbnail: response[title][i][2],
            price: response[title][i][3]
        }
        pieces.push(furniturePiece);
    }
    return pieces;
}

app.use([requestNFM, requestIKEA, requestWalmart, requestGoogle, requestHomeDepot, requestEtsy]);

app.get('/getNFM', function (req, res)
{
    var responseText = '<small>' + JSON.stringify(req.requestNFM) + '</small>'
    res.send(responseText)
})
app.get('/getIKEA', function (req, res)
{
    var responseText = '<small>' + JSON.stringify(req.requestIKEA) + '</small>'
    res.send(responseText)
})
app.get('/getWAL', function (req, res)
{
    var responseText = '<small>' + JSON.stringify(req.requestWalmart) + '</small>'
    res.send(responseText)
})
app.get('/getGOO', function (req, res)
{
    var responseText = '<small>' + JSON.stringify(req.requestGoogle) + '</small>'
    res.send(responseText)
})
app.get('/getHOME', function (req, res)
{
    var responseText = '<small>' + JSON.stringify(req.requestHomeDepot) + '</small>'
    res.send(responseText)
})
app.get('/getETSY', function (req, res)
{
    var responseText = '<small>' + JSON.stringify(req.requestEtsy) + '</small>'
    res.send(responseText)
})

// NFM - http://localhost:3000/getNFM?query=modern%20light%20green%20chair&size=5 - WORKING
// IKEA - http://localhost:3000/getIKEA?query=modern%20light%20green%20chair&size=5 - WORKING
// WAL - http://localhost:3000/getWAL?query=modern%20light%20green%20chair&size=5 - WORKING
// GOO - http://localhost:3000/getGOO?query=modern%20light%20green%20chair&size=5 - WORKING
// HOME - http://localhost:3000/getHOME?query=modern%20light%20green%20chair&size=5 - WORKING
// ETSY - http://localhost:3000/getETSY?query=modern%20light%20green%20chair&size=5 - WORKING

app.listen(3000)