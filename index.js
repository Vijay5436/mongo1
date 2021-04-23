require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors =require('cors');
const routes=require("./routes");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use('/',routes);
const ports =3000;


const server = app.listen({
    port: ports,
    host: process.env.HOST,
  });
  server.on('listening', () => {
    console.log('Listening', ports);
  });
  server.on('error', () => {
    console.log('error', process.env.PORT);
  });