//var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })


//var request = require('request');
//request('http://www.google.com', function(error, response, body){
//    if(error){
//       console.log("something went wrong");
//       console.log(error);
//    } else {
//        if(response.statusCode == 200){
//            //things worked
//            console.log(body);
//        }
//    }    
//});

//var request = require('request');

//console.log("Sunset in Hawaii is at...");
//request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
//    if(!error && response.statusCode == 200){
//        var parsedData = JSON.parse(body);
//        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
//    }
//});

var request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
    
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData['name'] + ' lives in ' + parsedData['address']['city']);
    }
});

//General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

//Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb