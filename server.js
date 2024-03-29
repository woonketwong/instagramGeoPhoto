/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    logger = require('mean-logger');
    var fs = require('fs');
    var path = require("path");
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    auth = require('./config/middlewares/authorization')

//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);


var app = express();

console.log("****************************");
console.log("* Current ENV:", app.get('env'));
console.log("****************************");

app.configure(function () {
  app.set('port', process.env.PORT || 5000);
  // app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(express.methodOverride());
  // app.use(flash());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

//express settings
require('./config/express')(app);

//Bootstrap routes
require('./config/routes')(app, auth);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);


//expose app
exports = module.exports = app;