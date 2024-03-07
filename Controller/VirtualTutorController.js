const gpt = require('../Model/GPTModel');
class VirtualTutor{
    index(req, res){
        return res.render('chat',{session: req.cookies.sguUser.HOTEN});
    }
    async result(req, res){
        const question = req.body["question"];
        const datetime = gpt.DateTime();
        const img = gpt.Img(); 
        const answer = await gpt.ConnectToGPT(question);
        const result = {answer, datetime, img};
        res.json({result});
    }

}
module.exports = new VirtualTutor; 