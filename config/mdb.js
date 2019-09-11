// /* eslint-disable linebreak-style */
// const Sequelize = require('sequelize');
// const env = require('../env');

// const Op = Sequelize.Op;
// const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
//   host: env.DATABASE_HOST,
//   port: env.DATABASE_PORT,
//   dialect: env.DATABASE_DIALECT,
//   define: {
//     underscored: true
//   },
//   operatorAliases: Op,
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// // Connect all the models/tables in the database to a db object,
// // so everything is accessible via one object
// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// // Models/tables

// db.users = require('../Models/users')(sequelize, Sequelize);

// module.exports = db;
