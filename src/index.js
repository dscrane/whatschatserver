require('dotenv').config()
const http = require('http');
const path = require('path');
const express = require('express');
const app = require('./config/appConfig');


const PORT = process.env.PORT || 5500;


const server = http.createServer(app)



server.listen(PORT, () => console.log('App listening on port:' + PORT))
