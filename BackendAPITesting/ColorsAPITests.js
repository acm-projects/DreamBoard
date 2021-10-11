const got = require('got');
require('dotenv').config({path:"../.env"});

const axios = require('axios');
const fs = require('fs');

// Test with random input color

// var get = "http://thecolorapi.com/scheme?";
// var hex = "8C87FF";
// var mode = "analogic";
// var url = get.concat("hex=",hex,'&format=json&mode=',mode);
// console.log(url);

// axios.get(url).then(resp => {
//     if (resp.data.code === 400)
//     {
//         console.log("Console error:");
//         console.log(resp.data);
//     }
//     else
//     {
//         const file = JSON.stringify(resp.data, null, 2);
//         fs.writeFile('PlainColorsAPICall.json', file, (err) => {
//         if (err) {
//             console.log("writing error");
//             throw err;
//         }
//         console.log("PlainColorsAPICall.json saved.");
//     });
//     }
// });

// Test with Imagga API Colors Endpoint

const imageUrl = 'https://cdn3.volusion.com/euhfr.xvuyx/v/vspfiles/photos/BUCK-XEKX2MOON2-2.jpg?v-cache=1557993632';
var imaggaurl = 'https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(imageUrl) + "&extract_overall_colors=0";


(async () => {
    try {
        const response = await got(imaggaurl, {username: process.env.IMAGGA_API_KEY, password: process.env.IMAGGA_API_SECRET});
        respbody = (response.body);
        // const respbody = JSON.stringify(JSON.parse(response.body), null, 2);
        // console.log(respbody.colors.foreground_colors);
    } catch (error) {
        console.log(error.response.body);
    }
})();

async function imaggaCall()
{
    try {
        const response = await got(imaggaurl, {username: process.env.IMAGGA_API_KEY, password: process.env.IMAGGA_API_SECRET});
        respbody = JSON.stringify(JSON.parse(response.body), null, 2);
        // const respbody = JSON.stringify(JSON.parse(response.body), null, 2);
        // console.log(respbody.colors.foreground_colors);
        return respbody;
    } catch (error) {
        console.log(error.response.body);
    }
}

(async () => {
    var respbody = await imaggaCall();
    console.log(respbody);
  })()
