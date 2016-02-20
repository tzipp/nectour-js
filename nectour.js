var cheerio = require('cheerio');
var request = require('request');

var url = "http://www.bassnectar.net/tour/";

var Event = {
    venue: "",
    city: "",
    state: "",
    // date
};

var eventEmitter = function(event, target) {
    console.log(JSON.stringify(event));
    
    // TODO: Send request to Django app to add event to database.         
};

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
    }
    
    // TODO: Dissect response to unpack information. 
    
});

var testEvent = function() {
    var event = Object.create(Event);
    event.venue = "Bass Center 2016";
    event.city = "Denver";
    event.state = "Colorado";

    eventEmitter(event, url);    
}();


