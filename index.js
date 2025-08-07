const express = require('express');
const { connectDB, sequelize } = require('./db/database');
const cors = require('cors');
require("dotenv").config();


require('./db/associations');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  credentials: true,
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ]
}));

app.use(express.json());
app.use('/uploads', express.static('uploads'));


app.options('*', cors());


app.use('/api/user', require('./routes/userRoute'));
app.use('/api/product', require('./routes/productRoute'));
app.use('/api/comment', require('./routes/commentRoute'));
app.use('/api/correction', require('./routes/correctionRoute'));
app.use('/api/shop', require('./routes/shopRoute'));


const startServer = async () => {
  await connectDB();
  await sequelize.sync({ alter: true }); // Don't drop tables
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
};

startServer();
