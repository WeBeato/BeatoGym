// modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

// config
dotenv.config(); 
const app = express();

// MongoDB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('اتصال به دیتابیس برقرار شد'))
    .catch((err) => console.log('خطا در اتصال به دیتابیس:', err));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('سرور باشگاه با موفقیت بالا اومد!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
