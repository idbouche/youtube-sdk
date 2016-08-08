var Youtube = require('../src/index');
var querystring = require('querystring');

var YT = new Youtube;
YT.use('Your API key');


var params = {
  part: 'snippet',
  location: '48.858319942162794,2.2944259643554683',
  locationRadius: '4000m',
  maxResults: '50',
  order: 'date',
  type: 'video',
  publishedBefore: '2016-08-03T00:00:00Z', //Date Google
  publishedAfter: '2016-08-02T00:00:00Z'
};

// Request server API method

YT.get('search', params, function (err, body) {
  if(err){
    console.log(err);
  }else{
    console.log(body);

  }

});
