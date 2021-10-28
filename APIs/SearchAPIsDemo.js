const APIs = require('./APIs.js');

var query = "mid century modern chair";
var size = 5;

var walmartShopping = APIs.walmartProducts(query,size);
walmartShopping.then(function(result)
{
    console.log('Walmart Shopping Results Output: ');
    console.log(typeof result);
    // console.log(result);
    console.log("\n");
});

var googleShopping = APIs.googleProducts(query,size);
googleShopping.then(function(result)
{
    console.log('Google Shopping Results Output: ');
    console.log(typeof result);
    // console.log(result);
    console.log("\n");
});

var homeDepotShopping = APIs.homeDepotProducts(query,size);
homeDepotShopping.then(function(result)
{
    console.log('Home Depot Shopping Results Output: ');
    console.log(typeof result);
    console.log("\n");
});

var etsyShopping = APIs.etsyProducts(query,size);
etsyShopping.then(function (result)
{
    console.log('Etsy Shopping Results Output: ');
    console.log(typeof result);
    // console.log(result);
    console.log("\n");
});