const express= require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    const error = new Erur('Could not find this route.', 404);
    throw error;
  });
  
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
  });
  mongoose
    .connect(
      `mongodb+srv://shivam:123456shivam@cluster0.dm1xw.mongodb.net/meme_yogi?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true }
    )
    .then(() => {
      app.listen(process.env.PORT || 5000);
    })
    .catch(err => {
      console.log(err);
    });
  
