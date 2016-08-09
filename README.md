node youtube-sdk
================
Small SDK for youtube API.

[![Build](https://travis-ci.org/idbouche/youtube-sdk.svg?branch=master)](https://travis-ci.org/idbouche/youtube-sdk)
[![Version](https://img.shields.io/npm/v/youtube-sdk.svg)](https://www.npmjs.com/package/youtube-sdk)
[![Downloads](https://img.shields.io/npm/dt/youtube-sdk.svg)](https://www.npmjs.com/package/youtube-sdk)
[![License](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/youtube-sdk)


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
  location   : '48.858319942162794,2.2944259643554683',
  locationRadius: '4000m',
  maxResults    : '50',
  order: 'date',
  type: 'video',
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
* params -  Object look here https://developers.google.com/apis-explorer/#p/youtube/v3/
* callback - Function callback return errors (errors youtube api) data in JSON


# API requests
For youtube API requests you have to use method *get(_resource, _params, _callback)*.

* **[string] _resource** - name of youtube API resource,    
  - **'activities'**
  - **'channels'**
  - **'channelBanners'**
  - **'guideCategories'**
  - **'playlistItems'**
  - **'playlists'**
  - **'search'**
  - **'subscriptions'**
  - **'thumbnails'**
  - **'videoCategories'**
  - **'videos'**
* **[mixed] _params** - object with values of parts for api method. This param is required.
  - **'snippet'**
  - **'contentDetails'**
  - **'status'**
  - **'statistics'**
  - **'player'**
  - **'topicDetails'**
  - **'recordingDetails'**
  - **'fileDetails'**
  - **'processingDetails'**
  - **'suggestions'**
  - **'...'**
* **[mixed] _callback** - required, function callback.


# For developers
Your commits and pull requests are welcome. Please run the tests before

    npm test

You have to provide tests for the new features.

# Support
* [Mohammed Id Bouche](idbouche2@gmail.com)


# Thanks to
* [Nunki.co](http://nunki.co)
* [MarquesDev](https://github.com/MarquesDev)
* [Sami-Radi](https://github.com/Sami-Radi)
