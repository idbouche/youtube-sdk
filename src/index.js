var request = require('request');
var qs = require('qs');
try {
  var debug = require('debug')('app:sdk');
} catch(err) {
  debug = function() { };
}
var Youtube = function() {
  var ENDPOINT = 'https://www.googleapis.com/youtube/v3/';
  var KEY = null;

  /**
   * The main function for making requests
   * @param method {String} GET|POST|DELETE|PUT
   * @param url {String} API method
   * @param params {Object} The call's params
   * @param callback
   * @private
   */

  var _request = function(method, url, params, callback) {
    if (!params) return callback(new Error('Params empty'));
    if (!params.part) return callback(new Error('Part not found'));
    if (!callback) return callback(new Error('No callback'));

    params.key = KEY;

    var Url = ENDPOINT + url + '?' + qs.stringify(params);

    debug('URL= %s', Url);

    request({url: Url, method: method.toUpperCase()},
      function(err, headers, body) {
        if (err) return callback(err, null, null);
        var data = JSON.parse(body);
        if (data.error) return callback(data, null, null);

        return callback(err, data, headers);
      });
  };

  this.use = function(key) {
    KEY = key;
  };

  this.get = function(url, params, callback) {
    return _request('GET', url, params, callback);
  };

  this.post = function(url, params, callback) {
    return _request('POST', url, params, callback);
  };

  this.put = function(url, params, callback) {
    return _request('PUT', url, params, callback);
  };

  this.delete = function(url, params, callback) {
    return _request('DELETE', url, params, callback);
  };
};

module.exports = Youtube;
