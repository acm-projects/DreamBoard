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
                    price = "$" + price.toFixed(2);
                    itemDict.push({
                        key: title,
                        value: [link, thumbnail, price]
                    });
                }

            }).catch(function(err) {
                return err;
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
        } catch (error)
        {
            console.log(error);
        }
    
        return itemDict;
    }
    
}