const express = require("express");

const app = express();

const mongoose = require("mongoose");



//Database

const database = (module.exports = () => { 

  const connectionParams = {

    useNewUrlParser: true,

    useUnifiedTopology: true,
  }
  
  try {

    mongoose.connect(
      "mongodb+srv://ihebsahli:iheb123@ihebsahli.li1tox7.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
      );

    console.log('Database connected succefulyy')

  } catch (error) {

    console.log(error);

    console.log('Database connection failed');

  }

});

database();

