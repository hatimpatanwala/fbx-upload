const { UploadedFileList } = require('../controllers/list.controller');
const express = require('express');

const router = express.Router();

router.get('/list', UploadedFileList);
module.exports = router;
