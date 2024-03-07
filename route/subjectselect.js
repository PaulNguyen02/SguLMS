const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = express.Router();
const subjectselectcontroller = require("../Controller/SubjectselectController");
router.use(cookieParser());  //Để đọc được session
router.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json());          //Phân giải các nội dung json trong parser
router.get('/Index', subjectselectcontroller.index);
router.post('/Search',subjectselectcontroller.search);
router.post('/Register',subjectselectcontroller.register);
router.post('/Delete',subjectselectcontroller.delete);
module.exports = router; 