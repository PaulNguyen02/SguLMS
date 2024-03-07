const homeRouter = require('./home');
const gradeRouter = require('./grade');
const examinationRouter = require('./examination');
const fee = require('./semesterfee');
const timetable = require('./timetable');
const subjectselect = require('./subjectselect');
const profileRouter = require('./profile');
const signinRouter = require('./signin');
const virtualtutor = require('./virtualtutor');
const documents = require('./documents');
const session = require('express-session');
function route(app){
    app.use('/Home', homeRouter);
    app.use('/Diem', gradeRouter);
    app.use('/Lichthi', examinationRouter);
    app.use('/Hocphi', fee);
    app.use('/Thoikhoabieu', timetable);
    app.use('/Dkmh', subjectselect);
    app.use('/Profile', profileRouter);
    app.use('/', signinRouter);
    app.use('/Dangnhap', signinRouter);
    app.use('/Tailieu', documents);
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
