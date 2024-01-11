const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const cors = require('cors');  
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());  

app.use(express.static(path.join(__dirname, "/client/dist")));
app.use('/api', indexRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/dist/index.html"))
})


module.exports = app;