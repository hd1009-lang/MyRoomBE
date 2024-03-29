const express = require('express');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const connectDB = require('./config/db');

const authRoute = require('./routes/auth.route');
const configRoute = require('./routes/config.route');
const timelineRoute = require('./routes/timeline.route');
const keyRoute = require('./routes/key.route');
const fileRoute = require('./routes/file.route');
const projectRoute = require('./routes/project.route');
const personRoute = require('./routes/person.route');

dotenv.config();
connectDB();
const app = express();
app.use(helmet());
app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp',
    })
);
app.get('/', (req, res) => res.json({ msg: 'welcome to api' }));
const PORT = 5000;

app.use('/api/user', authRoute);
app.use('/api/config', configRoute);
app.use('/api/timeline', timelineRoute);
app.use('/api/key', keyRoute);
app.use('/api/file', fileRoute);
app.use('/api/project', projectRoute);
app.use('/api/person', personRoute);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
