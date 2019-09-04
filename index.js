const express = require('express')
const path = require('path');
const helmet = require('helmet');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const apiAuthRouter = require('./routes/api/auth');
const apiUserRouter = require('./routes/api/users');
const apiProductorRouter = require('./routes/api/productor');
const apiSectionsRouter = require('./routes/api/sections');
const apiReadingsRouter = require('./routes/api/readings');

const { srvConfig } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
// app.use(helmet());

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use('/api/auth', apiAuthRouter);
app.use('/api/users', apiUserRouter);
app.use('/api/productor', apiProductorRouter);
app.use('/api/sections', apiSectionsRouter);
app.use('/api/readings', apiReadingsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const server = app.listen(srvConfig.port, () => {
  console.log('Server has been initialized on http://localhost:' + server.address().port);
});