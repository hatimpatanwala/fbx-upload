const { s3 } = require('../../config/aws.config');
const Upload = require('../models/upload.model');

const downloadFileFromAws = async (req, res) => {
  try {
    const { filename } = req.params;
    const upload = await Upload.findOne({ filename });
    if (!upload) {
      return res.status(404).json({ message: 'File not found' });
    }

    const s3Params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: filename,
    };

    const stream = s3.getObject(s3Params).createReadStream();
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', 'application/octet-stream');
    stream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { downloadFileFromAws };
