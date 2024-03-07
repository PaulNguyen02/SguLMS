const con = require('./BaseModel');
class Signin{
    Session(mssv, password){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM THONGTINCANHAN WHERE MASO = '"+mssv+"' AND MATKHAU = '"+password+"'", function (err, result) {                   
                    if (err){
                        return reject(err);
                    }        
                    return resolve(result);
                });
            }
            catch(e){
                reject(e);
            }
        })    
    }
}
module.exports = new Signin;