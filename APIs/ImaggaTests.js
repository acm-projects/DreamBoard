const got = require('got');
require('dotenv').config({path:"../.env"});
const fs = require('fs');

const apiKey = process.env.IMAGGA_API_KEY;
const apiSecret = process.env.IMAGGA_API_SECRET;
const extract_overall_colors = 0;
const imageUrl = 'https://cdn3.volusion.com/euhfr.xvuyx/v/vspfiles/photos/BUCK-XEKX2MOON2-2.jpg?v-cache=1557993632';

// Tags test

var url = 'https://api.imagga.com/v2/tags?image_url=' + encodeURIComponent(imageUrl);
console.log(url);

(async () => {
    try {
        const response = await got(url, {username: apiKey, password: apiSecret});
        // console.log(response.body);
        const respbody = JSON.stringify(JSON.parse(response.body), null, 2);
        fs.writeFile('ImaggaTagsCall.json', respbody, (err) => {
            if (err) {
                throw err;
            }
            console.log("ImaggaTagsCall.json saved.");
        });
    } catch (error) {
        console.log(error.response.body);
    }
})();


// Colors test

url = 'https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(imageUrl) + "&extract_overall_colors=0";

(async () => {
    try {
        const response = await got(url, {username: apiKey, password: apiSecret});
        // console.log(response.body);
        const respbody = JSON.stringify(JSON.parse(response.body), null, 2);
        fs.writeFile('ImaggaColorsCall.json', respbody, (err) => {
            if (err) {
                throw err;
            }
            console.log("ImaggaColorsCall.json saved.");
        });
    } catch (error) {
        console.log(error.response.body);
    }
})();