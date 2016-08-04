node youtube-sdk
================
Small SDK for youtube API.

# Installation
    npm install youtube-sdk

# Example
```js
// Setup

var Youtube = require('youtube-sdk');

var YT = new Youtube();
YT.use('Your key API')


var params = {
          part       : 'snippet',
          location   : '48.858319942162794%2C2.2944259643554683',
          locationRadius: '4000m',
          maxResults    : '50',
          publishedBefore: '2016-08-03T00:00:00Z', //Date Google
          publishedAfter: '2016-08-02T00:00:00Z'
      };

// Request server API method

YT.get('search', params, function (err, data) {
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }

});



```

# Setup
```js
var youtube = require('youtube-sdk');

var YT = new youtube();

YT.use('YOUR API KEY')

```

Required config options:
* YOUR API KEY — Key api code (check your application settings on https://console.developers.google.com)
* resource - Look here https://developers.google.com/apis-explorer/#p/youtube/v3/
* parts -  Object look here https://developers.google.com/apis-explorer/#p/youtube/v3/
* callback - Function callback return errors (errors youtube api) data in JSON


# API requests
For youtube API requests you have to use method *get(_resource, _parts, _callback)*.

* **[string] _resource** — name of youtube API resource,
* **[mixed] _parts** - object with values of parts for api method. This param is required.
* **[mixed] _callback** — required, function callback.


## Callback
```js

YT.get('search', {'part' : 'snippet'}, function(err,data) {
console.log(data);
});
```

# For developers
Your commits and pull requests are welcome. Please run the tests before

    npm test

You have to provide tests for the new features.

# Support
* [Mohammed Id Bouche](idbouche2@gmail.com)


# Thanks to
* [MarquesDev](https://github.com/MarquesDev)
* [Sami-Radi](https://github.com/Sami-Radi)
