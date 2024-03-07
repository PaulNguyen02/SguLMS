class HomeController {
    //[GET]
    index(req, res){
        return res.render('home',{session: req.cookies.sguUser.HOTEN});
    }
}

module.exports = new HomeController;