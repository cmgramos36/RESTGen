/*
 * RestGen
 * API REST generator
 * By: Cláudio Ramos - CR Sistemas de Computação
 * qui oct 06 15:31
 */
//const express = require('express');
const requireDir = require('require-dir');
//const app = express();

const app = require('fastify')({
  ignoreTrailingSlash: true,
  logger: true
});
const modGen = require('./modGen');
app.db = require("mongoose");
app.config = require("../etc/config.json");
require("./db")(app);
app.schemas = requireDir("../schemas");
app.models = {};

Object.entries(app.schemas).forEach(([key, val]) =>{  
  app.models[key] = modGen(app, val);
});

console.log(app.models);
require("../controllers/objs")(app);
require("../controllers/animais")(app);
require("../controllers/pessoas")(app);

/*
const SERVER = app.listen(app.config.serverport, app.config.serverip, 
  () =>{
      console.log(`Servidor rodando em: http://${app.config.serverip}:${app.config.serverport}`);
  }
) */

app.listen(app.config.serverport, app.config.serverip)
.then(addr => console.log(`app rodando em ${addr}`))
.catch(e => console.error(`falha ao iniciar o servidor`))