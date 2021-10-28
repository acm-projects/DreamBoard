const JSSoup = require('jssoup').default;
const puppeteer = require('puppeteer');
const got = require('got');

module.exports = {
    ikeaScrape: async function(query, size) {
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

                re = /img class=\"range-revamp-aspect-ratio-image__image\"/g;
                const rawImages = [];
                i = 0;
                size = temp;
                while((match = re.exec(html)) != null && size != 0) {
                    var start = match.index;
                    var end;
                    for(var j = 0; html.slice(start + j, start + j + 5) != " src=\""; j++) {
                        start = start + j + 6;
                    }
                    for(var k = 0; html.charAt(start + k) != '\"'; k++) {
                        end = start + k;
                    }
                    rawLinks[i] = html.slice(start, end + 1);
                    i++;
                    size--;
                }

                for(var i = 0; i < Math.min(rawTitles.length, rawLinks.length); i++) {
                    itemDict.push({
                        key: rawTitles[i],
                        value: [rawLinks[i], rawImages[i]]
                    });
                }
            }).catch(function(err) {
                console.log(err);
            });

        (await browser).close();

        return itemDict;
    },

    nfmScrape: async function (query, size) {
        var itemDict = [];
        
        try {
            const url = "https://www.nfm.com/search?q=" + query.replace(' ', '+') + "&lang=en_US&sz=" + size;
            const response = await got(url);
            const soup = new JSSoup(response.body);
            const rawTitles = soup.findAll('div', 'pdp-link');
            const rawLinks = soup.findAll('div', 'image-container');
            const rawImages = soup.findAll('img', 'tile-image');
            for(var i = 0; i < Math.min(rawTitles.length, rawLinks.length); i++) {
                itemDict.push({
                    key: rawTitles[i].nextElement.nextElement._text,
                    value: ["https://www.nfm.com" + rawLinks[i].nextElement.attrs.href, rawImages[i].attrs.src]
                });
            }
        } catch (error) {
            console.log(error.response.body);
        }
    
        return itemDict;
    }
    
}