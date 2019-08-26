const express = require('express')
const path = require('path');
const helmet = require('helmet');

const apiAuthRouter = require('./routes/api/auth');
const apiUserRouter = require('./routes/api/user');
const apiProductorRouter = require('./routes/api/productor');

const { srvConfig } = require('./config');

const app = express();

app.use(helmet());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use('/api/auth', apiAuthRouter);
app.use('/api/user', apiUserRouter);
app.use('/api/productor', apiProductorRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const server = app.listen(srvConfig.port, () => {
  console.log('Server has been initialized on http://localhost:' + server.address().port);
});