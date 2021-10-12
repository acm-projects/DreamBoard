const got = require('got');
require('dotenv').config({path:"../.env"});

const axios = require('axios');
const fs = require('fs');

function ColorsCall(filename,hex,mode)
{
    var get = "http://thecolorapi.com/scheme?";
    var url = get.concat("hex=",hex,'&format=json&mode=',mode);
    console.log(url);

    axios.get(url).then(resp => {
        if (resp.data.code === 400)
        {
            console.log("Console error:");
            console.log(resp.data);
        }
        else
        {
            const file = JSON.stringify(resp.data, null, 2);
            fs.writeFile(filename, file, (err) => {
            if (err) {
                console.log("writing error");
                throw err;
            }
            console.log(filename, "saved.");
        });
        }
    });
}


// Test with random input color

ColorsCall(filename='PlainColorsAPICall.json',hex="8C87FF",mode="analogic");

// // Test with Imagga API Colors Endpoint

const imageUrl = 'https://cdn3.volusion.com/euhfr.xvuyx/v/vspfiles/photos/BUCK-XEKX2MOON2-2.jpg?v-cache=1557993632';
var imaggaurl = 'https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(imageUrl) + "&extract_overall_colors=0";

async function imaggaCall()
{
    try
    {
        return got(imaggaurl, {username: process.env.IMAGGA_API_KEY, password: process.env.IMAGGA_API_SECRET}).then(token => { return token });
    }
    catch (error)
    {
        console.log(error.response.body);
    }
}

let userToken = imaggaCall();
userToken.then(function(result)
{
    respbody = JSON.stringify(JSON.parse(result['body']), null, 2);
    console.log(respbody);
})
// ["colors"]["foreground_colors"]