node youtube-sdk
================
Small SDK for youtube API.

# Installation
    npm install youtube-sdk

# Example
```js
// Setup
var youtube = require('youtube-sdk');
var YT = new youtube();
YT.use('YOUR API KEY')

// Request server API method
YT.get('saerch', {'part' : 'snippet'}, function(err, data) {
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

YT.get(resource,parts,callback)
```

Required config options:
* YOUR API KEY — Key api code (check your application settings on https://console.developers.google.com)
* resource - Look here https://developers.google.com/youtube/v3/determine_quota_cost
* parts -  Object look here https://developers.google.com/youtube/v3/determine_quota_cost
* callback - Function callback return errors (errors youtube api) data in JSON


# API requests
For vk.com API requests you have to use method *get(_resource, _parts, _callback)*.

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
* idbouche2@gmail.com


# Thanks to
* [MarquesDev](https://github.com/MarquesDev)
* [Sami-Radi](https://github.com/Sami-Radi)
