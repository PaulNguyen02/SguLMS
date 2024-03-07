const user = require('../Model/SigninModel');
class SigninController{
    index(req, res){
        return res.render('signin', { title: 'my other page', layout: 'main1' }) //Gọi đến một layout khác
    }
    //[POST]
    async session(req, res){
        const mssv = req.body["mssv"];
        const pass  = req.body["password"];
        let userobject = await user.Session(mssv, pass);
        const authen = userobject[0].QUYEN;
        const active_buffer = Buffer.from(authen);
        const active_boolean = Boolean(active_buffer.readInt8()); 
        res.cookie('sguUser', userobject[0], { maxAge: 900000, httpOnly: true })       
        if(active_boolean==false)            
            return res.render("home", {session: req.cookies.sguUser});
        else
            return;
    }  
}
module.exports = new SigninController;