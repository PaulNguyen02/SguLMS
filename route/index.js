const homeRouter = require('./home');
const profileRouter = require('./profile');
const signinRouter = require('./signin');
const virtualtutor = require('./virtualtutor');
const session = require('express-session');
function route(app){
    app.use('/Home', homeRouter);
    app.use('/Profile', profileRouter);
    app.use('/', signinRouter);
    app.use('/Dangnhap', signinRouter);
    app.use('/Giasuao', virtualtutor);
    app.use(session({
        secret: "sgu", // Change this to a random and secure string
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000*60*60*24}
    }));
    //app.get('/home',(req, res) => {res.render('home')});    // Sau khi điều hướng tới thư mục view thì tìm đến home
}

module.exports = route;
