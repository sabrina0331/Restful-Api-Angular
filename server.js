var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const path = require('path');


app.use(bodyParser.json())
app.use(express.static(__dirname + '/public/dist/public'))

require('./server/config/routes')(app)


app.listen(8000,function(){
    console.log('I am listening ~~~~')
})