const CosmosClient = require('@azure/cosmos').CosmosClient;
const config = require('./config');
const TaskList = require('./routes/tasklist');
const Task = require('./models/task');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// Mostrar los views de JADE como HTML con EXPRESS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cosmosClient = new CosmosClient({
  endpoint: config.host,
  key: config.authKey
});

const TaskObjeto = new Task(CosmosClient, config.databaseID, config.containerId);

const taskList = new TaskList(TaskObjeto);

TaskObjeto
  .init(err => {
    console.log(err);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  })

app.get("/", (req, res, next) => taskList.showTask(req, res).catch
(next));

app.post("/agregar", (req, res, next) => taskList.addTask(req, res).
catch(next));

app.post("/completar", (req, res, next) => taskList.completeTask(req,
res).catch(next));

app.set('view engine', 'jade');

// Manejar un 404
app.use(function(req, res, next){
  const err = new Errpr("Not Found");
  err.status = 404;
  next(err);
});

module.exports = app;