const { uploadFile, getFileUrl } = require('../utils/aws.util');
const Upload = require('../models/upload.model');

const uploadFileToAws = async (req, res) => {
  try {
    let { originalname, buffer } = req.file;
    // console.log(originalname);
    const originalFileName = originalname;
    const split = originalname.split('.');
    const ext = split[split.length - 1];
    originalname = new Date().getTime() + '.' + ext;
    // console.log(ext);
    const awsRes = await uploadFile({ originalname, buffer });
    // return;
    const url = getFileUrl({ originalname });
    // console.log(url);
    const upload = new Upload({
      filename: originalname,
      url,
      originalFileName,
    });
    await upload.save();

    res.status(200).json({
      message: 'File uploaded successfully',
      data: { filename: originalname, url, originalFileName },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { uploadFileToAws };
