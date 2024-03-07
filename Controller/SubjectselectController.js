const subject = require('../Model/SubjectsModel');
class SubjectselectController{
    //[GET]
    async index(req, res){
        const maso = req.cookies.sguUser.MASO;
        let datalist = await subject.getDataList();
        let result = await subject.getList();
        let faculty_list = await subject.getFacultyList();
        let current_semester = await subject.getSemester();
        let registed_subject = await subject.getRegistedList(maso);
        result.forEach(element => {     //Cập nhật lại các tiết thực hành
            const active_buffer = Buffer.from(element.THUCHANH);
            const active_boolean = Boolean(active_buffer.readInt8());
            element.THUCHANH = active_boolean;
        });
        return res.render("subjectselect",{result, datalist, faculty_list, current_semester, registed_subject ,session: req.cookies.sguUser.HOTEN}); 
        //trả về 2 bộ dữ liệu nếu trong php hay nodejs, trong asp thì 2 bộ dữ liệu nên đc tạo trong một obj chung
    }
    //[POST]
    async search(req, res){
        const id = req.body["search"];
        let result = await subject.getSearchList(id);
        return res.render("subjectselect",{result});
    }

    async delete(req, res){
        const mamh = req.body["mamh"];
        const maso = req.cookies.sguUser.MASO;
        await subject.Delete(mamh, maso);
    }

    //[POST]
    async register(req, res){
        const mamh = req.body["mamh"];
        const thuc_hanh = req.body["thuchanh"];
        const maso = req.cookies.sguUser.MASO;
        let current_semester = await subject.getSemester();
        await subject.Register(maso, mamh, current_semester["STT"] ,thuc_hanh); 
    }
}
module.exports = new SubjectselectController; 
