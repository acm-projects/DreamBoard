var query = "modern green chair";
var size = 5;

var axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const JSSoup = require('jssoup').default;


async function getETSY(query, size)
{
    query = query.replace(' ', '%20')
    var config =
    {
        method: 'get',
        url: 'https://www.etsy.com/search',
        params:
        {
            q: query
        }
    };
    axios(config)
    .then(function (response)
    {
        const dom = new JSDOM(response.data);
        var links = [];
        dom.window.document.querySelectorAll('a').forEach(link =>
        {
            if (link.href.includes("https://www.etsy.com/listing/"))
            {
                links.push(link.href);
            }
        });
        links = links.splice(0,size);
        return links;
    })
    .then(function (response)
    {
        console.log(response.length);
        for (i in response)
        {

        }
    })
    .catch(function (error)
    {
        console.log(error);
    });
}

async function getETSYListing(url)
{
    var config =
    {
        method: 'get',
        url: url
    };
    axios(config)
    .then(function (html)
    {
        const soup = new JSSoup(html);
        var rawTitles = soup.find('div', 'listing-right-column');
        console.log(rawTitles);
        // const dom = new JSDOM(response.data);
        // var item = dom.window.document.querySelector('div');
        // console.log(item);
    })
    .catch(function (error)
    {
        console.log(error);
    });
}

var newrl = "https://www.etsy.com/listing/1043575792/60s-mid-century-modern-atomic-pair-cosco?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=modern+green+chair&ref=sr_gallery-1-6&organic_search_click=1&frs=1";
getETSYListing(newrl);

// getETSY(query,size);