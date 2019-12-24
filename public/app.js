var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shouye = require('./routes/shouye');
var goid = require('./routes/goid');
var upfilm = require('./routes/upfilm');
var findfilm = require('./routes/findfilm');
var findall = require('./routes/findall');
var addfilm = require('./routes/addfilm');
var deletfilm = require('./routes/deletfilm');
var xiangxifenlei = require('./routes/xiangxifenlei');
var upguanxi= require('./routes/upguanxi');
var querenupguanxi= require('./routes/querenupguanxi');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//绑定页面相应
app.use('/shouye', shouye);
app.use('/goid', goid);
app.use('/upfilm', upfilm);
app.use('/findfilm', findfilm);
app.use('/findall', findall);
app.use('/addfilm', addfilm);
app.use('/deletfilm', deletfilm);
app.use('/xiangxifenlei', xiangxifenlei);
app.use('/upguanxi', upguanxi);
app.use('/querenupguanxi', querenupguanxi);



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
