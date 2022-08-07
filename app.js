var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose= require('./mongoConnection')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employees');
var feedbackRouter = require('./routes/feedback');
var profileRouter = require('./routes/profile');
var marsRouter = require('./routes/mars-user');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// most important explains how the route works  in index.js
// every request wiht the '/' will go to indexRouter
// ....................................................................................................
//


app.use('/users', usersRouter);
app.use('/', indexRouter);
app.use('/employees', employeesRouter);
app.use('/feedback', feedbackRouter);
app.use('/profile', profileRouter)
app.use('/mars-user', marsRouter)



// ....................................................................................................
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
