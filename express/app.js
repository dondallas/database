/**
 * Created by wangxiaohui on 17/8/3.
 */

var express = require('express');
var app = express();
var https = require('https');
var http = require('http');
http.createServer(app).listen(80);
https.createServer(options, app).listen(443);