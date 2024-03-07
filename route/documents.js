const express = require('express');
const router = express.Router();
const doccontroller = require('../Controller/DocumentController');
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use('/', doccontroller.index);
module.exports = router;