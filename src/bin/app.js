
const express = require('express');
const requireDir = require('require-dir');
const app = express();
const modelGen = require('./modelGen');
app.db = require("mongoose");
app.config = require("../etc/config.json");
require("./db")(app);
app.schemas = requireDir("../schemas");
app.models = {};
app.models.obj = require("../models/obj")(app);

Object.entries(app.schemas).forEach(([key, val]) =>{  
  app.models[key] = modelGen(app, val);
});

console.log(app.models);
require("../controllers/obj")(app);
require("../controllers/animais")(app);

const SERVER = app.listen(app.config.serverport, app.config.serverip, 
  () =>{
      console.log(`Servidor rodando em: http://${app.config.serverip}:${app.config.serverport}`);
  }
)