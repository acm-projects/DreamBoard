/*
     - SERP API
        Google Product Search
        Home Depot Product Search
        Walmart Product Search
    - Etsy API
        Etsy Listing Search
    - Imagga
        Get color scheme
*/

require('dotenv').config({path:"./.env"});
const axios = require('axios');


async function imaggaColors(imageURL)
{
    const apiKey = process.env.IMAGGA_API_KEY;
    const apiSecret = process.env.IMAGGA_API_SECRET;
    const authorization = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;
    const url = "https://api.imagga.com/v2/colors?image_url=" + imageURL;

    var config =
    {
        method: 'get',
        url: url,
        headers:
        {
            "Authorization": authorization
        }
    };

    var results = axios(config)
    .then(function (response)
    {
        results = response.data.result;
        return results;
    }).catch(error =>
    {
        results = error.response.status;
        return results;
    });
    
    return results;
}

async function etsyProducts(query,size)
{
    const etsyKey = process.env.ETSY_KEYSTRING;
    var url = "https://openapi.etsy.com/v3/application/listings/active?".concat("limit=", size, "&keywords=", query);
    var config =
    {
        method: 'get',
        url: url,
        headers:
        {
            'x-api-key': etsyKey
        }
    };
    var results = axios(config)
    .then(function (response)
    {
        results = response.data.results;
        return results;
    }).catch(error =>
    {
        // results = "Etsy Error caught: " + "Error " + error.response.status + ": " + error.response.data.error;
        results = error.response.status;
        return results;
    })
    return results;
}

async function productSearchSerpAPI(params)
{
    const serpAPIKey = process.env.SERP_API_KEY;
    const serpURL = "https://serpapi.com/search";
    params['api_key'] = serpAPIKey;
    var results = axios
    ({
        method: 'get',
        url: serpURL,
        params: params
    })
    .then(function (response)
    {
        results = response.data;
        return results;
    })
    .catch(error =>
    {
        // results = "Error " + (error.response.status) + ": " + error.response.data.error;
        results = error.response.status;
        return results;
    });
    return results;
}

async function googleProducts(query,size)
{
    var params =
    {
        q: query,
        tbm: "shop",
        location: "Dallas",
        hl: "en",
        gl: "us"
    };
    var products = productSearchSerpAPI(params)
    .then(function (results)
    {
        if ((typeof results) === "number")
        {
            products = results;
        }
        else
        {
            products = Object.fromEntries(Object.entries(results["shopping_results"]).slice(0, size));
        }
        return products;
    })
    .catch(error =>
    {
        products =  error;
        return products;
    });
    return products;
}

async function walmartProducts(query,size)
{
    var params =
    {
        engine: "walmart",
        query: query
    };
    var products = productSearchSerpAPI(params)
    .then(function (results)
    {
        if ((typeof results) === "number")
        {
            products = results;
        }
        else
        {
            products = Object.fromEntries(Object.entries(results['organic_results']).slice(0, size));
        }
        return products;
    })
    .catch(error =>
    {
        products = error;
        return products;
    });
    return products;
}

async function homeDepotProducts(query,size)
{
    var params =
    {
        engine: "home_depot",
        q: query
    };
    var products = productSearchSerpAPI(params)
    .then(function (results)
    {
        if ((typeof results) === "number")
        {
            products = results;
        }
        else
        {
            products = Object.fromEntries(Object.entries(results['products']).slice(0, size));
        }
        return products;
    })
    .catch(error =>
    {
        products = error;
        return products;
    });
    return products;
}

module.exports =
{
    googleProducts,
    walmartProducts,
    homeDepotProducts,
    etsyProducts,
    imaggaColors
};

// async function testAPIs()
// {
//     // etsy ping

//     // serp other
//     var serpCheckURL = "https://serpapi.com/account?api_key=" + process.env.SERP_API_KEY;
//     console.log(serpCheckURL);
//     var serpCheck = axios.get({url: serpCheckURL})
//     .then(function (response)
//     {
//         results = response.data;
//         return results;
//     })
//     .catch(error =>
//     {
//         results = "SERP Check Error " + (error.response.status) + ": " + error.response.data.error;
//         return results;
//     });
//     return serpCheck;

//     // imagga usage

// }