require('dotenv').config({path:"./.env"});
const axios = require('axios');


async function imaggaColors(imageURL, count)
{
    const apiKey = process.env.IMAGGA_API_KEY;
    const apiSecret = process.env.IMAGGA_API_SECRET;
    const authorization = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;
    const url = "https://api.imagga.com/v2/colors?";

    var config =
    {
        method: 'get',
        url: url,
        headers:
        {
            "Authorization": authorization
        },
        params:
        {
            'image_url' : imageURL,
            'overall_count' : count,
            'deterministic' : 1,
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
    var url = "https://openapi.etsy.com/v2/listings/active";
    var config =
    {
        method: 'get',
        url: url,
        params:
        {
            'api_key' : etsyKey,
            'limit' : size,
            'keywords' : query,
            // 'color_triplet' : color,
            // 'color_wiggle' : 10,
            'sort_on' : 'score',
            'taxonomy' : 967,
            'min_price' : 50,
            // 'offset' : 1,
        }
    };
    // deprecated - with v3 of api, gets quality results
    // var url = "https://openapi.etsy.com/v3/application/listings/active?".concat("limit=", size, "&keywords=", query);
    // var config =
    // {
    //     method: 'get',
    //     url: url,
    //     headers:
    //     {
    //         'x-api-key': etsyKey
    //     }
    // };
    var info = axios(config)
    .then(function (response)
    {
        info = response.data.results;
        return info;
    }).catch(error =>
    {
        // results = "Etsy Error caught: " + "Error " + error.response.status + ": " + error.response.data.error;
        info = error.response.status;
        return info;
    });
    return info;
}

async function etsyThumbnail(listingid)
{
    const etsyKey = process.env.ETSY_KEYSTRING;
    var url = "https://openapi.etsy.com/v2/listings/" + listingid + "/images";
    var config =
    {
        method: 'get',
        url: url,
        params:
        {
            'api_key': etsyKey
        }
    };
    var result = axios(config)
    .then(function (response)
    {
        result = response.data.results[0]['url_fullxfull'];
        return result;
    }).catch(error =>
    {
        // results = "Etsy Error caught: " + "Error " + error.response.status + ": " + error.response.data.error;
        result = error.response.status;
        return result;
    });
    return result;
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

async function theColorApi(html_code)
{
    var config = 
    {
        method: 'get',
        url: 'https://www.thecolorapi.com/id',
        params:
        {
            "hex": html_code
        }
    };
    var color = axios(config)
    .then(function (response)
    {
        // color = response['data']['name']['value'];
        color = response['data']['image']['bare'];
        return color;
    })
    .catch(error =>
    {
        color = error.response;
        return color;
    });
    return color;
}

module.exports =
{
    googleProducts,
    walmartProducts,
    homeDepotProducts,
    etsyProducts,
    etsyThumbnail,
    imaggaColors,
    // theColorApi
};