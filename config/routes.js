module.exports = function(app, auth) {
    //Home routes
    var index = require('../app/controllers/index');
    app.get('/', index.render);
    app.post('/', index.apiRequest);
};
