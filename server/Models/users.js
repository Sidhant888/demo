// const name = 'User'
// const tableName = 'users'
// const selectableProps = [
//   'id',
//   'username',
//   'email',
//   'updated_at',
//   'created_at'
// ]
// module.exports = knex => {
//     return knex.schema.createTable('users', t => {
//       t.increments('id').primary().unsigned()
//       t.string('username').unique().index()
//       t.string('password')
//       t.string('email').unique().index()
//       t.timestamp('created_at').defaultTo(knex.fn.now())
//       t.timestamp('updated_at').defaultTo(knex.fn.now())
//     })
//   }


//   module.exports = function(sequelize, DataTypes) {
//     return sequelize.define('users', {
//       user_id: {
//         type: DataTypes.INTEGER(11),
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       first_name: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//       },
//       last_name: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//       },
//       email_id: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//         unique: true
//       },
//       password: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//       },
//       active_status: {
//         type: DataTypes.INTEGER(4),
//         allowNull: false,
//         defaultValue: '1'
//       },
//       invitation_date: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//       },
//       activation_date: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//       },
//       last_login: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//       },
//       last_login_team: {
//         type: DataTypes.INTEGER(11),
//         allowNull: false,
//         defaultValue: '0'
//       },
//       profile_picture: {
//         type: DataTypes.STRING(255),
//         allowNull: true 
//       },
//       profile_picture_thumbnail: {
//         type: DataTypes.STRING(255),
//         allowNull: true 
//       },
//       access_token: {
//         type: DataTypes.TEXT,
//         allowNull: true 
//       },
//       created_at: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//       },
//       updated_at: {
//         type: DataTypes.DATE,
//         allowNull: false
//       }
//     }, {
//       tableName: 'users'
//     });
//   };
  