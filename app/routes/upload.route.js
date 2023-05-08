const express = require('express');
const multer = require('multer');
const { uploadFileToAws } = require('../controllers/upload.controller');

const router = express.Router();
const upload = multer();

router.post('/upload', upload.single('fbxFile'), uploadFileToAws);

module.exports = router;
