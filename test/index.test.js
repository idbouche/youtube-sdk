
var expect = require('chai').expect;
var Youtube = require('../src/index');
//
var YT = new Youtube;
YT.use('Your key API')


var params = {
          part       : 'snippet',
          location   : '48.858319942162794%2C2.2944259643554683',
          locationRadius: '4000m',
          maxResults    : '50',
          publishedBefore: new Date(1469739935*1000).toISOString(), //Date Google
          publishedAfter: new Date(1467147935*1000).toISOString()
      };



YT.get('search', params, function (err, body) {
      console.log(body);

});


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
