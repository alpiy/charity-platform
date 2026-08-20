const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[DATABASE] MongoDB Terkoneksi: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[ERROR] Gagal koneksi ke database: ${error.message}`);
    process.exit(1); // Hentikan proses jika gagal terhubung
  }
};

module.exports = connectDB;
