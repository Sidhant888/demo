import app from './server/Config/express';
import db from './server/Config/db';
import config from './server/Config/env';

const debug = require('debug')('same-brain:app');

const port = process.env.PORT || config.PORT;

// connecting the database
db.sequelize.sync().then(() => {
  debug('Database connected');
  // listen server on port
  app.listen(port, () => {
    debug('Server listning on port', port);
  });
});
