/* eslint-disable linebreak-style */
// const Knex = require('knex');
const env = require('../env/development.js');
const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : env.DATABASE_HOST,
      user : env.DATABASE_USERNAME, 
      password : env.DATABASE_PASSWORD,
      database : env.DATABASE_NAME,
    },
    pool: { min: 0, max: 7 }
  });
const db = {};
db.knex = knex;
// db.users = require('../server/Models/users')(knex, Knex);

module.exports = db;
