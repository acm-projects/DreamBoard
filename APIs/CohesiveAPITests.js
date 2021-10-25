/*
    CohesiveAPITests.js contains functions to call all 3 APIs and their tests,
    plus descriptions and use options.
*/

// packages
require('dotenv').config({path:"../.env"});
const fs = require('fs');
const axios = require('axios');


// TheColorAPI Function

    // mode options: monochrome, monochrome-dark, monochrome-light,
    //               analogic, complement, analogic-complement, triad, quad
    // call only made from inside Imagga functions

function ColorsCall(filename,hex,mode,count)
{
    var get = "http://thecolorapi.com/scheme?";
    if (mode == null)
    {
        mode = "analogic"; // api default is monochrome but I consider that boring :)
    }
    var url = get.concat("hex=",hex,"&format=json&mode=",mode,"&count=",count);
    if (filename == null)
    {
        filename = "TheColorAPIGenericCall.json";
    }
    console.log(url);

    axios.get(url).then(resp => {
        if (resp.data.code === 400)
        {
            console.log("TheColorAPI Call error:");
            console.log(resp.data);
        }
        else
        {
            const file = JSON.stringify(resp.data, null, 2);
            fs.writeFile(filename, file, (err) => {
            if (err) {
                console.log("TheColorAPI Writing Error");
                throw err;
            }
            console.log(filename, "saved.");
        });
        }
    });
}

// ImaggaAPI Function

function ImaggaCall(imageURL)
{
    if (imageURL == null)
    {
        const imageURL = "https://secure.img1-fg.wfcdn.com/im/39757761/resize-h310-w310%5Ecompr-r85/"+
           "7184/71846174/garren-398-w-tufted-polyester-club-chair.jpg";
    }
    const apiKey = process.env.IMAGGA_API_KEY;
    const apiSecret = process.env.IMAGGA_API_SECRET;
    const imaggaurl = 'https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(imageURL) +
                      "&extract_overall_colors=0";

    axios.get(imaggaurl,
    {
        headers: {"image_url" : imageURL, "extract_overall_colors" : 0},
        auth: {username : apiKey, password : apiSecret}
    }).then(resp =>
    {
        console.log("Imagga Call Success");
        HTMLCodes = resp.data.result.colors.foreground_colors[0].html_code;
        // if (HTMLCodes.length)
        // // [0].html_code;
        hex = html_code.slice(1,html_code.length);
        ColorsCall(filename=null,hex=hex,mode=null);
    }).catch(error =>
    {
        console.log("Status:",error.status);
    })
}

ImaggaCall(("https://secure.img1-fg.wfcdn.com/im/39757761/resize-h310-w310%5Ecompr-r85/"+
"7184/71846174/garren-398-w-tufted-polyester-club-chair.jpg"));


// SerpAPI Function


// Call ImaggaAPI

// Call ColorsAPI for ImaggaAPI

// Call SerpAPI

