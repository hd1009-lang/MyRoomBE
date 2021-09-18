const express = require('express');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoute = require('./routes/auth.route');
const configRoute = require('./routes/config.route');

dotenv.config();
connectDB();
const app = express();
app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
    })
);
app.get('/', (req, res) => res.json({ msg: 'Ok' }));
const PORT = 5000;
app.use('/api/user', authRoute);
app.use('/api/config', configRoute);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
