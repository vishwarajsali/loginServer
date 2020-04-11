
'use strict';

const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const users = require('./routers/users')


const app = express();
const router = express.Router();

app.use(cors()) 
app.use(bodyParser.json());

router.get('/', (req, res) => {
   res.send(`<h3> ${req.get('host')}/.netlify/functions/server/users/login</h3>`);
})



 
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/.netlify/functions/server/users', users);

module.exports = app;
module.exports.handler = serverless(app);
