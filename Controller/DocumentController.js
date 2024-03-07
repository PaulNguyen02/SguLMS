class ExaminationController{
    //[GET]
    index(req, res){
        return res.render('documents',{session: req.cookies.sguUser.HOTEN});
    }
}
module.exports = new ExaminationController;