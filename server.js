require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database.config');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const uploadRoutes = require('./app/routes/upload.route');
const downloadRoutes = require('./app/routes/download.route');
const listRoutes = require('./app/routes/listRoute');
app.use(uploadRoutes);
app.use(downloadRoutes);
app.use(listRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
