var express = require('express')

var bodyParser = require('body-parser')
var path = require('path')
var util = require('util')
var formidable = require('formidable')
var app = express()

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload', (req, res) => {

  var form = new formidable.IncomingForm();
  form.parse(req);
  form.on('fileBegin', function (name, file){
      file.path ='./upload/' + file.name;
  });
  form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);
  });
  res.send('success')
})



app.listen(3000, () => {
  console.log('server start at port 3000')
})