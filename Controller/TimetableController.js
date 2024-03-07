class TimetableController{
    index(req, res){
        return res.render('timetable',{session: req.cookies.sguUser.HOTEN});
    }
}
module.exports = new TimetableController; 