const grade = require('../Model/GradeModel');
class GradeController{
    //[GET]
    async index(req, res){
        const semester = await grade.getSemester();
        const grade_list = await grade.getGrade(req.cookies.sguUser.MASO);
        return res.render('grade',{semester, grade_list, session: req.cookies.sguUser.HOTEN}); 
    }
}
module.exports = new GradeController;