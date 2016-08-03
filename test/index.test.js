
var expect = require('chai').expect;
var Youtube = require('../src/index');
//
var YT = new Youtube;
//YT.use('AIzaSyBxaRL2YkR-3zhHmYfUMGkMtUuUBcmrrpU')


// var params = {
//           lng   : 2.2944259643554683,
//           lat   : 48.858319942162794,
//           radius: 4000,
//           max: new Date(1469739935*1000).toISOString(),
//           min: new Date(1467147935*1000).toISOString()
//       };


// var params = {
//           part       : 'snippet',
//           location   : '48.858319942162794%2C2.2944259643554683',
//           locationRadius: '4000m',
//           maxResults    : '50',
//           publishedBefore: new Date(1469739935*1000).toISOString(),
//           publishedAfter: new Date(1467147935*1000).toISOString()
//       };
var params = {
    id         : 'WNRT8YTBGYs'
      };

// var params = {
//           part       : 'snippet',
//           id         : 'UCbhUhA9WfE295P2zBulZGxA'
//       };


// YT.get('search', params, function (body) {
//       console.log(body.items);
//
// });

YT.get('videos', params, function (body) {
      console.log(body);

});

// YT.get('channels', params, function (err, response, body) {
//       console.log(body);
//
// });

describe('SDK-YOUTUBE', function () {
            it('object',function () {
                YT.get('videos', params, function (err, body) {
                    expect(body).to.be.an('object');
                  });
            })
            it('length',function () {
                YT.get('videos', params, function (err, body) {
                    expect(body).to.not.be.empty;
                  });
            })
});
