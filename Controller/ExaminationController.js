class ExaminationController{
    //[GET]
    index(req, res){
        return res.render('examination',{session: req.cookies.sguUser.HOTEN});
    }
}
module.exports = new ExaminationController;