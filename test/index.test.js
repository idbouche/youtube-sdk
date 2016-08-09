var expect = require('chai').expect;
var YT = new (require('../src/index.js'))();
var key = require('./../_config/key.json')
require('env2')('./../_config/key.json');
var KEY = process.env.KEY;

YT.use(KEY);

var params = {
  part           : 'snippet',
  location       : '48.858,2.294',
  locationRadius : '1000m',
  maxResults     : '50',
  order          : 'date',
  type           : 'video',
  publishedBefore: new Date(1469739935 * 1000).toISOString(), //Date Google
  publishedAfter : new Date(1467147935 * 1000).toISOString()
};

describe('SEARCH', function () {
  it('Should return an array of contents', function (done) {
    YT.get('search', params, function (err, response, headers) {
      if ( err ) return done(err);
      expect(response.items).to.have.length.above(1);
      done();
    });
  });

  it('Should return an error', function (done) {
    YT.get('search', {}, function (err, response, headers) {
      console.log(err);
      expect(err).to.be.an('error');
      done()
    });
  });
});
