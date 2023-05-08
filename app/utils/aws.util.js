// const { s3 } = require('../../aws.config');
const { s3 } = require('../../config/aws.config');

const uploadFile = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
  };

  return s3.upload(params).promise();
};

const getFileUrl = (file) => {
  return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${file.originalname}`;
};

module.exports = { uploadFile, getFileUrl };
