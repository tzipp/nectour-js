var cheerio = require('cheerio');
var request = require('request');

var url = "http://www.bassnectar.net/tour/";

var Event = {
    venue: "",
    city: "",
    state: "",
    // date
};

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
    }    
});



