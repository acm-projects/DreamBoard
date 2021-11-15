// Test URLS:
    // getNFM  - http://localhost:3000/getNFM?query=modern%20orange%20chair&size=5  - WORKING
    // getIKEA - http://localhost:3000/getIKEA?query=modern%20orange%20chair&size=5 - WORKING
    // getWAL  - http://localhost:3000/getWAL?query=modern%20orange%20chair&size=5  - WORKING
    // getGOO  - http://localhost:3000/getGOO?query=modern%20orange%20chair&size=5  - WORKING
    // getHOME - http://localhost:3000/getHOME?query=modern%20orange%20chair&size=5 - WORKING
    // getETSY - http://localhost:3000/getETSY?query=modern%20orange%20chair&size=5 - WORKING
    // getCHO  - http://localhost:3000/getCHO?htmls=326065&htmls=4e858a&htmls=fefefe - WORKING
    // getPICS - http://localhost:3000/getPICS?url=https://secure.img1-fg.wfcdn.com/im/14264752/resize-h800-w800%5Ecompr-r85/1444/144451974/Ivo+30%27%27+Wide+Tufted+Wingback+Chair.jpg - WORKING

const express = require('express');
const APIs = require('./APIs.js');
const Scrapers = require('./Scrapers.js');
var app = express();
app.set('json spaces', 4);
app.listen(3000);
const cors = require('cors');
app.use(cors({ origin: '*' }));
app.use(cors({ methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'] }));

async function getPicture(req,res,next)
{
    var url = req.query.url;
    var image = await APIs.imaggaColors(url,3);
    var colors = [];
    for (i in image['colors']['image_colors'])
    {
        colors.push(image['colors']['image_colors'][i]['closest_palette_color']);
    }
    req.getPicture = colors;
    next();
}
app.use('/getPICS',getPicture);
app.get('/getPICS', function (req, res)
{
    var responseText = req.getPicture;
    res.send(responseText);
})

async function getChoice(req, res, next)
{
    var htmls = (req.query.htmls);
    var colorList = [];
    for (i in htmls)
    {
        var url = "http://placehold.it/300x300.png/" + htmls[i];
        var color = await APIs.imaggaColors(url,1);
        colorList.push(color['colors']['image_colors'][0]['closest_palette_color_parent']);
    }
    req.getChoice = colorList;
    next();
}
app.use('/getCHO',getChoice);
app.get('/getCHO', function (req, res)
{
    var responseText = req.getChoice;
    res.send(responseText)
})

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
app.use('/getNFM',requestNFM);
app.get('/getNFM', function (req, res)
{
    var responseText = req.requestNFM;
    res.send(responseText)
})

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
app.use('/getIKEA',requestIKEA);
app.get('/getIKEA', function (req, res)
{
    var responseText = req.requestIKEA;
    res.send(responseText)
})

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
app.use('/getWAL',requestWalmart);
app.get('/getWAL', function (req, res)
{
    var responseText = req.requestWalmart;
    console.log(responseText);
    res.send(responseText)
})

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
app.use('/getGOO',requestGoogle);
app.get('/getGOO', function (req, res)
{
    var responseText = req.requestGoogle;
    res.send(responseText)
})

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
app.use('/getHOME',requestHomeDepot);
app.get('/getHOME', function (req, res)
{
    var responseText = req.requestHomeDepot;
    res.send(responseText);
})

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
        var getThumbnail = await APIs.etsyThumbnail(getETSY[i]['listing_id']);
        response[title][i] = [getETSY[i]['title'],getETSY[i]['url'],getThumbnail,getETSY[i]['price']];
    }

    req.requestEtsy = formatResponse(response,title);
    next();
}
app.use('/getETSY',requestEtsy);
app.get('/getETSY', function (req, res)
{
    var responseText = req.requestEtsy;
    res.send(responseText);
})

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

module.exports =
{
    getChoice,
    getPicture
};