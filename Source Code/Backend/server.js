const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const session = require('express-session');
const fileupload = require('express-fileupload');

const mongoose = require('mongoose');

const config = require('./configure.js');

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database " + err);
    }
  );

  app.use(cors());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(fileupload({
     useTempFiles:true
  }));

  app.use(session({
    secret: 'kjcxlchiy48236',
    resave: false,
    saveUninitialized: false
  }));
  
  app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });

  const ItemsController = require('./Controller/Items.controller');

  app.use('/items', ItemsController);