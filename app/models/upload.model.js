const mongoose = require('mongoose');

const UploadSchema = mongoose.Schema(
  {
    filename: String,
    url: String,
    originalFileName: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Upload', UploadSchema);
