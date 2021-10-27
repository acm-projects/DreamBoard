const APIs = require('./APIs.js');

// var walmartShopping = APIs.walmartProducts("Black Chair",5);
// walmartShopping.then(function(result)
// {
//     console.log('Walmart Shopping Results Output: ');
//     console.log(typeof result);
//     console.log("\n");
// });

// var googleShopping = APIs.googleProducts("Black Chair",5);
// googleShopping.then(function(result)
// {
//     console.log('Google Shopping Results Output: ');
//     console.log(typeof result);
//     console.log("\n");
// });

// var homeDepotShopping = APIs.homeDepotProducts("Black Chair",5);
// homeDepotShopping.then(function(result)
// {
//     console.log('Home Depot Shopping Results Output: ');
//     console.log(typeof result);
//     console.log("\n");
// });

var etsyShopping = APIs.etsyProducts("Black Chair",5);
etsyShopping.then(function (result)
{
    console.log('Etsy Shopping Results Output: ');
    console.log(Object.keys(result));
    console.log("\n");
});