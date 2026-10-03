const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo-service:27017/devopsdb';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Backend service is healthy!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
