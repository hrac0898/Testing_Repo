const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productsRoute = require('./routes/products');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', productsRoute);

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'MERN Tailwind E-commerce backend is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
