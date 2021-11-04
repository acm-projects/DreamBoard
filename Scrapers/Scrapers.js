const JSSoup = require('jssoup').default;
const puppeteer = require('puppeteer');
const got = require('got');
const CC = require('currency-converter-lt');

module.exports = {
    ikeaScrape: async function(query, size) {
        var itemDict = [];

        var currencyConverter = new CC({from:"SAR", to:"USD", amount:1})
        var exchange = await currencyConverter.convert();

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
                // var re = /span class=\"range-revamp-header-section__title--small notranslate\"/g;
                // const rawTitles = [];
                // var i = 0;
                // var temp = size;
                // while((match = re.exec(html)) != null && size != 0) {
                //     var start = match.index + 67;
                //     var end;
                //     for(var j = 0; html.charAt(start + j) != '<'; j++) {
                //         end = start + j;
                //     }
                //     rawTitles[i] = html.slice(start, end + 1);
                //     i++;
                //     size--;
                // }

                // re = /div class=\"range-revamp-product-compact__bottom-wrapper\"/g;
                // const rawLinks = [];
                // i = 0;
                // size = temp;
                // while((match = re.exec(html)) != null && size != 0) {
                //     var start = match.index + 66;
                //     var end;
                //     for(var j = 0; html.charAt(start + j) != '\"'; j++) {
                //         end = start + j;
                //     }
                //     rawLinks[i] = html.slice(start, end + 1);
                //     i++;
                //     size--;
                // }

                // re = /img class=\"range-revamp-aspect-ratio-image__image\"/g;
                // const rawImages = [];
                // i = 0;
                // size = temp;
                // while((match = re.exec(html)) != null && size != 0) {
                //     var start = match.index;
                //     var end;
                //     for(var j = 0; html.slice(start + j, start + j + 5) != " src=\""; j++) {
                //         start = start + j + 6;
                //     }
                //     for(var k = 0; html.charAt(start + k) != '\"'; k++) {
                //         end = start + k;
                //     }
                //     rawLinks[i] = html.slice(start, end + 1);
                //     i++;
                //     size--;
                // }

                // for(var i = 0; i < Math.min(rawTitles.length, rawLinks.length); i++) {
                //     itemDict.push({
                //         key: rawTitles[i],
                //         value: [rawLinks[i], rawImages[i]]
                //     });
                // }
                const soup = new JSSoup(html);
                const rawTitles = soup.findAll('span', 'range-revamp-header-section__description-text');
                const rawLinks = soup.findAll('div', 'range-revamp-product-compact__bottom-wrapper');
                const rawImages = soup.findAll('div', 'range-revamp-product-compact__image-wrapper');
                const rawPrices = soup.findAll('span', 'range-revamp-price__integer');
                for(var i = 0; i < size; i++) {
                    var title = rawTitles[i].nextSibling.nextElement._text;
                    var link = rawLinks[i].nextElement.attrs.href;
                    var thumbnail = rawImages[i].nextElement.nextElement.attrs.src;
                    var price = rawPrices[i].nextElement._text;
                    price = parseInt(price) * exchange;  // Conversion from SAR to USD
                    price = "$" + price;
                    itemDict.push({
                        key: title,
                        value: [link, thumbnail, price]
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
            const rawPrices = soup.findAll('div', 'price');
            for(var i = 0; i < Math.min(rawTitles.length, rawLinks.length); i++) {
                var title = rawTitles[i].nextElement.nextElement._text;
                var link = "https://www.nfm.com" + rawLinks[i].nextElement.attrs.href;
                var thumbnail = rawImages[i].attrs.src;
                var price = rawPrices[i].nextElement.nextSibling.nextElement.nextElement.nextElement.nextElement._text.replace(new RegExp("\n", "g"), '');
                itemDict.push({
                    key: title,
                    value: [link, thumbnail, price]
                });
            }
        } catch (error) {
            console.log(error.response.body);
        }
    
        return itemDict;
    }
    
}