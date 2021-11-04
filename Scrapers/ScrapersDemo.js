const scrapers = require('./Scrapers.js');

var ikea = scrapers.ikeaScrape("black table", 5);
ikea.then(function(result) {
    console.log('Ikea Scraper Function Output: \n');
    console.log(result);
});

var nfm = scrapers.nfmScrape("blue couch", 5);
nfm.then(function(result) {
    console.log('NFM Scraper Function Output: \n');
    console.log(result);
});