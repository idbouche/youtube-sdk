
var request = require('request');

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
  * This Function: Test Whether An Input Object Is Empty
  * @function
  * @param {object} obj - object.
  */
function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

/**
  * @constructor
  */

var Youtube = function() {
  this.key ;
  this.use = function (key) {
     this.key = key;
  };

  /**
    * This Function: Request server API method.
    * @function
    * @param {string} resource -  the resource of the API.
    * @param {object} params - the parts of the resource .
    * @param {function} - callback (function(err, data){}).
    */

  this.get = function (resource, params, callback) {
    if (isEmpty(params)===false && callback){
      var url = 'https://www.googleapis.com/youtube/v3/'+ resource +'?'
      for (var parm in params){
        url +=  parm + '=' + params[parm]+ '&';
      }
      url += 'order=date&type=video%2Clist&key='+this.key
      request({
        url:url,
        method: 'GET'
      }, function (err, res, body){
        var data = JSON.parse(body);
        callback(err,data);
      });
    }else{
      callback({message: 'Error'})
    }

  }
}

module.exports = Youtube;
