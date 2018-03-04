// This file contains the instructions for the server.
// The server is pretty much in charge of setting the content to be displayed using HTTP commands
// The google API key: AIzaSyBklx0NJ6k6BhH41zLL05tTWQxLXyUG4hw

//Included libraries from the node modules
var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var mysql = require('mysql');


//Add in modules
var vDataAbs = require(__dirname+'/nodeServerJSFiles/vitechDataExtraction.js');
var AWSdata = require(__dirname+'/nodeServerJSFiles/AWSdata.js');
var pageTurn = require(__dirname+'/nodeServerJSFiles/pageTurns');
//Create instance of express app
var app = express()

//Want to serve js and html in ejs (embedded javascript)
app.set('view engine','ejs')

//Want to send css and images, and other static files
app.use(express.static('views'))

//View engine - allows us to use static template files like CSS
app.set('views',__dirname+'/views');

//Give server access to user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

//This pretty much just logs stuff out for us.
app.use(logger('dev'))


//Page turner nav bar responses
app.get('/',AWSdata.getFiles,pageTurn.home)
app.post('/movePage',pageTurn.getD)
app.get('/getData',vDataAbs.search,pageTurn.home)


//Set the port that you wish the server to listen to
var port =  8888

//Listens in on a specific port so that can run
app.listen(port,function(){
 console.log("App is running on port"+port)
  })
