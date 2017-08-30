// EC5
//var express = require('express');
//var path = require('path');
//var open = require('open');

//EC6
import express from 'express';
import path from 'path';
import open from 'open';


//EC5 uses var, EC6 uses const
const port = 3000;
const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
