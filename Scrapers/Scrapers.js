const JSSoup = require('jssoup').default;
const puppeteer = require('puppeteer');
const got = require('got');

// var nfm = nfmScrape("Modern Black Furniture", 5);
// nfm.then(function(result) {
//     console.log(result);
// });

// var ikea = ikeaScrape("table", 5);
// ikea.then(function(result) {
//     console.log(result);
// });

async function ikeaScrape(query, size) {
    var itemDict = [];

    const url = "https://www.ikea.com/sa/en/search/products/?q=" + query.replace(' ', '+');

    const browser = puppeteer.launch();    
    await browser
        .then(function(browser) {
            return browser.newPage();
        })
        .then(function(page) {
            return page.goto(url).then(function() {
                return page.content();
            });
        })
        .then(function(html) {
            var re = /span class=\"range-revamp-header-section__title--small notranslate\"/g;
            const rawTitles = [];
            var i = 0;
            var temp = size;
            while((match = re.exec(html)) != null && size != 0) {
                var start = match.index + 67;
                var end;
                for(var j = 0; html.charAt(start + j) != '<'; j++) {
                    end = start + j;
                }
                rawTitles[i] = html.slice(start, end + 1);
                i++;
                size--;
            }

            re = /div class=\"range-revamp-product-compact__bottom-wrapper\"/g;
            const rawLinks = [];
            i = 0;
            size = temp;
            while((match = re.exec(html)) != null && size != 0) {
                var start = match.index + 66;
                var end;
                for(var j = 0; html.charAt(start + j) != '\"'; j++) {
                    end = start + j;
                }
                rawLinks[i] = html.slice(start, end + 1);
                i++;
                size--;
            }

            for(var i = 0; i < Math.min(rawTitles.length, rawLinks.length); i++) {
                itemDict.push({
                    key: rawTitles[i],
                    value: rawLinks[i]
                });
            }
        }).catch(function(err) {
            console.log(err);
        });

    (await browser).close();

    return itemDict;
}

async function nfmScrape(query, size) {
    var itemDict = [];
    
    try {
        const url = "https://www.nfm.com/search?q=" + query.replace(' ', '+') + "&lang=en_US&sz=" + size;
        const response = await got(url);
        const soup = new JSSoup(response.body);
        console.log(response.body);
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
