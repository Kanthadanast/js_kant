var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var officesRouter = require('./routes/office-route');
var officeService = require('./routes/office-service');
var officeRepo = require('./routes/office-repo');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/offices', officesRouter);
app.use('/services', officeService);
app.use('/repo', officeRepo);


module.exports = app;
