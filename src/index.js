var request        = require('request'),
    qs             = require('qs'),
    debug          = require('debug')('app:sdk'),
    hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {
  if ( obj == null ) return true;
  if ( obj.length > 0 ) return false;
  if ( obj.length === 0 ) return true;
  for (var key in obj) {
    if ( hasOwnProperty.call(obj, key) ) return false;
  }
  return true;
}

var Youtube = function () {
  var ENDPOINT = 'https://www.googleapis.com/youtube/v3/';
  var KEY = null;

  var _request = function (method, url, params, callback) {
    if ( isEmpty(params) ) return callback(new Error('Params empty'));
    if ( !callback ) return callback(new Error('No callback'));

    var url = ENDPOINT + url + '?' + qs.stringify(params) + '&key=' + KEY;

    debug('URL= %s', url);

    request({ url   : url, method: method.toUpperCase() }, function (err, headers, body) {
      if ( err ) return callback(err, null, null);
      var body = JSON.parse(body);
      if(body.error) return callback(body, null, null);

      return callback(err, body, headers);
    });
  }

  this.use = function (key) {
    KEY = key;
  };

  this.get = function (url, params, callback) {
    return _request('GET', url, params, callback);
  }

  this.post = function (url, params, callback) {
    return _request('POST', url, params, callback);
  }

  this.put = function (url, params, callback) {
    return _request('PUT', url, params, callback);
  }

  this.delete = function (url, params, callback) {
    return _request('DELETE', url, params, callback);
  }
}

module.exports = Youtube;
