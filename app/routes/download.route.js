const express = require('express');
const { downloadFileFromAws } = require('../controllers/download.controller');

const router = express.Router();

router.get('/download/:filename', downloadFileFromAws);

module.exports = router;
