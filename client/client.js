const axios = require('axios');

async function queryBuilder(htmls,style,type)
{
    var colorConfig =
    {
        method: 'get',
        url: 'http://localhost:3000/getCHO',
        params:
        {
            htmls : htmls,
        }
    };
    var colors;
    try
    {
        colors = await axios(colorConfig);
        colors = colors['data'];
    }
    catch (err)
    {
        console.log(Object.keys(err));
        console.log(err['toJSON']);
    }
    console.log(colors);
}

queryBuilder(['326065','4e858a','fefefe'])

async function getAll(htmls,style,type,size)
{
    
}
function testWalmart(query,size)
{
    var config =
    {
        method: 'get',
        url: 'http://localhost:3000/getWAL',
        params:
        {
            'query':query,
            'size':size
        }
    };
    var info = axios(config)
    .then(function (response)
    {
        info = response['data'];
        console.log(info);
        return info;
    }).catch(error =>
    {
        return error.response;
    });
}
// testWalmart("modern orange chair",5);