const express = require('express');

const app = express();

// middleware
app.use('/users', (req,res,next) => {
  console.log('middleware one');
  res.send({message: "welcome to the nodejs course"});
});

app.use('/', (req,res,next) => {
  console.log('middleware one');
});