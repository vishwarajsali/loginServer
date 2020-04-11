'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routers/users')
app.use(cors()) 

const router = express.Router();

app.use(bodyParser.json());


router.get('/', (req, res) => {
   res.send("Vish login API Home");
})

router.get('/login', (req, res, next) =>{
  //if(err) throw err;
  res.send(
      {msg : 'login'}
      )
})


app.use('/users', users);


app.use('/.netlify/functions/server', router);  // path must route to lambda
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
