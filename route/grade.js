const express = require('express');
const router = express.Router();
const gradecontroller = require('../Controller/GradeController');
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use('/Index', gradecontroller.index);
module.exports = router;