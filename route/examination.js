const express = require('express');
const router = express.Router();
const examinationcontroller = require("../Controller/ExaminationController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use('/', examinationcontroller.index);
module.exports = router;