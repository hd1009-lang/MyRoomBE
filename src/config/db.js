const mongoose = require('mongoose');

const connectDB = async () => {
    const URL = process.env.MONGODB_CLOUD;
    try {
        const conn = await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Kết nối thất bại ${error.messenger}`);
    }
};
module.exports = connectDB;
