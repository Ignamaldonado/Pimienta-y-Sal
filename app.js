var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override') // NUEVO NO ESTA es para los metodos put y delete

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detailRouter = require ('./routes/detail');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); //NUEVO NO ESTA es para los metodos put y delete

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/detail' , detailRouter)

// 404 error
app.use(function(req, res, next) {
  res.status(404).send('no se encontro capo');
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
