
// const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const app = express();
// const morgan = require('morgan');
// const path = require('path');
// const port = process.env.PORT || 3000;
// const mongoose = require('mongoose');
// const passport = require('passport');
// const flash = require('connect-flash');
// const session = require('express-session');
// const db = require('./app/models');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.set('port', process.env.PORT || 3000);

// // comment this stuff so you get it
// app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser.json()); // get information from html forms
// app.use(bodyParser.urlencoded({extended: true})); // get information from html forms
// app.use(express.static('public'));
// app.use(session({
//   saveUninitialized: true,
//   resave: false,
//   secret: 'LambChop',
//   cookie: {
//     maxAge: 3000
//   }
// }));

// var index = require('./app/routes/index');
// var users = require('./app/routes/users');

// require('./app/config/passport')(passport); // pass passport for configuration

// app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
// app.use('/public', express.static(process.cwd() + '/public'));
// app.use('/common', express.static(process.cwd() + '/app/common'));
// app.use('/view', express.static(process.cwd() + './views'));

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash()); //use with session for social login i think

// require('./app/routes/index.js')(app, passport); // l pass in passport

// /////neeed this/////
// app.use(require('./app/routes'));

// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req
//     .app
//     .get('env') === 'development'
//     ? err
//     : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`);
// });
