import app from './config/express';
import config from './env';
const debug = require('debug')('same-brain:app');
console.log("tipu");
const port = process.env.PORT || config.PORT;

// connecting the database
// db.sequelize.sync().then(() => {
//   debug('Database connected');
  // listen server on port
  app.listen(port, () => {
    debug('Server listning on port', port);
  });
// });