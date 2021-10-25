require('dotenv').config({path:"../.env"});
const fs = require('fs');

const serpAPIKey = process.env.SERP_API_KEY;
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(serpAPIKey);


// SerpAPI Google Products

var params = {
  q: "mid century modern chair",
  tbm: "shop",
  location: "Dallas",
  hl: "en",
  gl: "us"
};

callback = function(data) {
  response = data['shopping_results'];
  const body = JSON.stringify(response, null, 2);
  fs.writeFile('SerpAPI_GoogleProductsCall.json', body, (err) => {
        if (err) {
            throw err;
        }
        console.log("SerpAPI_GoogleProductsCall.json saved.");
    });
};

search.json(params, callback);


// SerpAPI Home Depot Products

params = {
  engine: "home_depot",
  q: "chair"
};

callback = function(data) {
    response = data['products'];
    const body = JSON.stringify(response, null, 2);
    fs.writeFile('SerpAPI_HomeDepotCall.json', body, (err) => {
          if (err) {
              throw err;
          }
          console.log("SerpAPI_HomeDepotCall.json saved.");
      });
};

search.json(params, callback);


// SerpAPI Walmart Products

params = {
    engine: "walmart",
    query: "Coffee"
  };

callback = function(data) {
    response = data['organic_results'];
    const body = JSON.stringify(response, null, 2);
    fs.writeFile('SerpAPI_WalmartCall.json', body, (err) => {
          if (err) {
              throw err;
          }
          console.log("SerpAPI_WalmartCall.json saved.");
      });
};

search.json(params, callback);