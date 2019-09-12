import app from './config/express';
import config from './env';
console.log("sid");
const debug = require('debug')('same-brain:app');

const port = process.env.PORT || config.PORT;

// connecting the database
// db.sequelize.sync().then(() => {
//   debug('Database connected');
  // listen server on port
  app.listen(port, () => {
    debug('Server listning on port', port);
  });
// });