const APIs = require('./APIs.js');

var googleShopping = APIs.googleProducts("black table");
googleShopping.then(function(result)
{
    console.log('Google Shopping Results Output: \n');
    console.log((result));
});