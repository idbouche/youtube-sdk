var Youtube = require('youtube-sdk');

var YT = new Youtube;
YT.use('Your key API')


var params = {
          part       : 'snippet',
          location   : '48.858319942162794%2C2.2944259643554683',
          locationRadius: '4000m',
          maxResults    : '50',
          publishedBefore: '2016-08-03T00:00:00Z', //Date Google
          publishedAfter: '2016-08-02T00:00:00Z'
      };



YT.get('search', params, function (err, body) {
      console.log(body);

});
