const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const apiAuthRouter = require('./routes/auth');
const apiUserRouter = require('./routes/users');
const apiProductorRouter = require('./routes/productor');
const apiSectionsRouter = require('./routes/sections');
const apiReadingsRouter = require('./routes/readings');

const { srvConfig } = require('./config/index');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use('/auth', apiAuthRouter);
app.use('/users', apiUserRouter);
app.use('/productor', apiProductorRouter);
app.use('/sections', apiSectionsRouter);
app.use('/readings', apiReadingsRouter);

app.listen(srvConfig.port, () => {
    console.log(`Listening http://localhost:${srvConfig.port}`);
});