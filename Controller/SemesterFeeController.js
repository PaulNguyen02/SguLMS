const subject = require('../Model/SemesterFeeModel');
const calc = require('../Model/BussinessCompute/Compute');
class SemesterFeeController{
    async index(req, res){
        const maso = req.cookies.sguUser.MASO;
        let current_semester = await subject.getSemester();
        let registed_subject = await subject.getRegistedList(maso);
        let fee = calc.TotalSubjectinSemester(registed_subject);
        //console.log(registed_subject);
        return res.render("semesterfee", { current_semester,registed_subject, fee, session: req.cookies.sguUser.HOTEN}); 
        //trả về 2 bộ dữ liệu nếu trong php hay nodejs, trong asp thì 2 bộ dữ liệu nên đc tạo trong một obj chung
    }
}
module.exports = new SemesterFeeController; 