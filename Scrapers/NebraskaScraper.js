const JSSoup = require('jssoup').default;
const got = require('got');

// var nfmScrape = NFMScrape("Modern Black Furniture", 5);
// nfmScrape.then(function(result) {
//     console.log(result);
// });

async function NFMScrape(query, size) {
    var itemDict = [];
    
    try {
        const url = "https://www.nfm.com/search?q=" + query.replace(' ', '+') + "&lang=en_US&sz=" + size;
        const response = await got(url);
        const soup = new JSSoup(response.body);
        const rawTitles = soup.findAll('div', 'pdp-link');
        const rawLinks = soup.findAll('div', 'image-container');
        for(var i = 0; i < Math.min(rawTitles.length, rawLinks.length); i++) {
            itemDict.push({
                key: rawTitles[i].nextElement.nextElement._text,
                value: "https://www.nfm.com" + rawLinks[i].nextElement.attrs.href
            });
        }
    } catch (error) {
        console.log(error.response.body);
    }

    return itemDict;
}
