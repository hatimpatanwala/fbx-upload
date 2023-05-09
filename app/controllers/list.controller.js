const Upload = require('../models/upload.model');

const UploadedFileList = async (req, res) => {
  try {
    const list = await Upload.find({});
    if (!list) {
      return res.status(404).json({ message: 'No Data found' });
    }
    res.status(200).json({ data: list });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
module.exports = { UploadedFileList };
