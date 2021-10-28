/*
     - SERP API
        Google Product Search
        Home Depot Product Search
        Walmart Product Search
    - Etsy API
        Etsy Listing Search
*/

require('dotenv').config({path:"../.env"});
const axios = require('axios');

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
        results = "Error " + (error.response.status) + ": " + error.response.data.error;
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
        if ((typeof results) === "string")
        {
            products = "Google Error caught: " + results;
        }
        else
        {
            products = Object.fromEntries(Object.entries(results["shopping_results"]).slice(0, size));
        }
        return products;
    })
    .catch(error =>
    {
        products = "Google Error caught: " + error;
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
        if ((typeof results) === "string")
        {
            products = "Walmart Error caught: " + results;
        }
        else
        {
            products = Object.fromEntries(Object.entries(results['organic_results']).slice(0, size));
        }
        return products;
    })
    .catch(error =>
    {
        products = "Walmart Error caught" + error;
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
        if ((typeof results) === "string")
        {
            products = "Home Depot Error caught: " + results;
        }
        else
        {
            products = Object.fromEntries(Object.entries(results['products']).slice(0, size));
        }
        return products;
    })
    .catch(error =>
    {
        products = "Home Depot Error caught" + error;
        return products;
    });
    return products;
}

async function etsyProducts(query,size) // ,color,colorRange
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
        results = "Etsy Error caught: " + "Error " + error.response.status + ": " + error.response.data.error;
        return results;
    })
    return results;
}

module.exports =
{
    googleProducts,
    walmartProducts,
    homeDepotProducts,
    etsyProducts
}