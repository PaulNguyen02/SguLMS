class ProfileController{
    index(req, res){
        return res.render('profile', {session: req.cookies.sguUser.HOTEN})
    }
}
module.exports = new ProfileController;