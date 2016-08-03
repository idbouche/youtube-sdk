
var request = require('request');

var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

var Youtube = function(method, params) {
  this.key ;
  this.use = function (key) {
     this.key = key;
  };

  this.get = function (method, params, callback) {
    if (isEmpty(params)===false && callback){
      var url = 'https://www.googleapis.com/youtube/v3/'+ method +'?'
      for (var parm in params){
        url +=  parm + '=' + params[parm]+ '&';
      }
      url += 'order=date&type=video%2Clist&key='+this.key
      request({
        url:url,
        method: 'GET'
      }, function (err, res, body){
        body = JSON.parse(body);
        callback(err,body);
      });
    }else{
      callback({message: 'Error'})
    }

  }
}

module.exports = Youtube;
