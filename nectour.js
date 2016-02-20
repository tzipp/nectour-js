var cheerio = require('cheerio');
var request = require('request');

var url = "http://www.bassnectar.net/tour/";

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }    
});




