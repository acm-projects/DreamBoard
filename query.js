const APIs = require('./APIs.js');
const scrapers = require('./Scrapers/Scrapers.js')

// function queryBuilder(colors,styles,types,size) // construct from frontend, finish later
// {
//     // colors - array of 3 color objects (hex, name)

//     var colorQuery = "";


//     // styles - string, one style name

//     var styleQuery = "";
//     const vendors = ["IKEA","NFM","ETSY","GOOG","WALM","HOME"];
//     const styles = // assigned vendor priority
//     {
//         "Minimalist" : [0,0,0,0,0,0],
//         "Mid Century Modern" : [0,0,0,0,0,0],
//         "Traditional" : [0,0,0,0,0,0],
//         "Scandinavian" : [0,0,0,0,0,0],
//         "Industrial" : [0,0,0,0,0,0],
//         "Urban" : [0,0,0,0,0,0],
//         "Country" : [0,0,0,0,0,0],
//         "Coastal" : [0,0,0,0,0,0],
//         "Eclectic" : [0,0,0,0,0,0],
//         "Cottage-core" : [0,0,0,0,0,0],
//         "Bohemian" : [0,0,0,0,0,0],
//         "Vintage" : [0,0,0,0,0,0],
//         "Tropical" : [0,0,0,0,0,0]
//     };


//     // types  - string, one type name

//     var typeQuery = "";
//     const types =
//     ['Sofas',
//     'Chairs',
//     'Loveseats',
//     'Accent chairs',
//     'Recliners',
//     'Ottomans',
//     'Coffee tables',
//     'End tables',
//     'Benches',
//     'Accent tables',
//     'Chests',
//     'Bookcases',
//     'Consoles',
//     'Dining tables',
//     'Arm Chairs',
//     'Bar stools',
//     'Sideboards',
//     'Beds',
//     'Headboards',
//     'Nightstands',
//     'Dressers',
//     'Mirrors',
//     'Mattresses',
//     'Benches',
//     'Desks',
//     'Storage cabinets',
//     ]

//     // make queue
//     // var queue = [];

//     // return query
//     var query = "";
//     query = query.concat(styleQuery, typeQuery, colorQuery);
//     return query;

//     // var processQuery =
//     // {
//     //     "query": query,
//     //     "queue": queue
//     // };
//     // return processQuery;
// }


function basicCallback(result,title)
{
    console.log(title);
    // console.log(typeof result);
    console.log(result);
    console.log("\n");
}

var query = "mid century modern chair";
var size = 5;

var walmartShopping = APIs.walmartProducts(query,size);
walmartShopping.then(function(result)
{
    var title = ('Walmart');
    basicCallback(result,title);
});
var googleShopping = APIs.googleProducts(query,size);
googleShopping.then(function(result)
{
    var title = ('Google');
    basicCallback(result,title);
});
var homeDepotShopping = APIs.homeDepotProducts(query,size);
homeDepotShopping.then(function(result)
{
    var title = ('Home Depot');
    basicCallback(result,title);
});
var etsyShopping = APIs.etsyProducts(query,size);
etsyShopping.then(function (result)
{
    var title = ('Etsy');
    basicCallback(result,title);
});

var imaggaURL = "https://cdn3.volusion.com/euhfr.xvuyx/v/vspfiles/photos/BUCK-XEKX2MOON2-2.jpg?v-cache=1557993632";
var imaggaCall = APIs.imaggaColors(imaggaURL);
imaggaCall.then(function(result)
{
    // var title = ('Imagga');
    // basicCallback(result,title);
});