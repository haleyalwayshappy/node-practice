var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('queryString');
var Template = require('./Template');
http.createServer(function(req,res){
    var parsedUrl = url.parse(req.url, true);
    
})