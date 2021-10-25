/*
     - SERP API
        Google Product Search
        Home Depot Product Search
        Walmart Product Search
    - Etsy API
*/

require('dotenv').config({path:"../.env"});
const SerpApi = require('google-search-results-nodejs');
const axios = require('axios');
const got = require('got');

// SERP
const serpAPIKey = process.env.SERP_API_KEY;
const serpURL = "https://serpapi.com/search";
const search = new SerpApi.GoogleSearch(serpAPIKey);
// ETSY
const etsyKey = process.env.ETSY_KEYSTRING;
const etsySecret = process.env.ETSY_SECRET;

module.exports =
{
    googleProducts: async function(query)
    {
        var params =
        {
            q: query,
            tbm: "shop",
            location: "Dallas",
            hl: "en",
            gl: "us"
        };
        var googleData;
        const callback = function(data)
        {
            return (data['inline_shopping_results']);
        };
        // Show result as JSON
        let result = search.json(params, callback);
        console.log(result);
    }
}