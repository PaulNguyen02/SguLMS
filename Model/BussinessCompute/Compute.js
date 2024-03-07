class Compute{
    RemainSlot(){       //Tính toán số slot còn lại

    }

    SubjectFee(stc){      //Tính học phí
        return stc* 370000;
    }

    TotalSubjectinSemester(list){
        let total = 0;
        list.forEach(subject => {     //Cập nhật lại các tiết thực hành
            total+=this.SubjectFee(subject.STC);
        });
        return total;
    }
    
}
module.exports = new Compute;