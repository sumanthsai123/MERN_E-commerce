// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const adminRoutes = require('./routes/adminRoutes');

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/admin', adminRoutes);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(process.env.PORT || 5000, () => console.log('Server running'));
//   })
//   .catch((err) => {
//     console.error('Connection error:', err);
//   });

