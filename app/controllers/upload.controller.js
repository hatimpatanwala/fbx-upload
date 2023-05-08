const { uploadFile, getFileUrl } = require('../utils/aws.util');
const Upload = require('../models/upload.model');

const uploadFileToAws = async (req, res) => {
  try {
    const { originalname, buffer } = req.file;
    const awsRes = await uploadFile({ originalname, buffer });
    const url = getFileUrl({ originalname });

    const upload = new Upload({ filename: originalname, url });
    await upload.save();

    res.status(200).json({
      message: 'File uploaded successfully',
      data: { filename: originalname, url },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { uploadFileToAws };
