const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

// 1. Load environment variables
dotenv.config();

// 2. Inisialisasi koneksi Database
connectDB();

// 3. Inisialisasi Express
const app = express();

// 4. Middleware
app.use(cors()); // Mengizinkan request dari frontend React
app.use(express.json());  // Mem-parsing body request berbentuk JSON
app.use('/api/auth',  require('./routes/authRoutes'));
app.use('/api/campaigns',  require('./routes/campaignRoutes'));
app.use('/api/donations', require('./routes/donationRoutes.js'));
// 5. Route Dasar (Testing)
app.get('/', (req, res) => {
  res.json({ message: 'API Charity Platform berjalan dengan baik...' });
});

// 6. Jalankan Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[SERVER] Berjalan di port ${PORT}`);
});
