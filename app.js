const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
// import routes
const bookRoute = require('./routes/books');
app.use('/books', bookRoute);

mongoose.connect("mongodb://localhost:27017/test",()=>{
    console.log("Database Connected");
});


app.listen(8080);