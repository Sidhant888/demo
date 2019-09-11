const env = {
  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:mysql://localhost:3306/samebrains',
  DATABASE_NAME: process.env.DATABASE_NAME || 'samebrains',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8089,
  DOMAIN_IP: 'http://localhost:8089/v1.0/',
  APIVERSION: 'v1.0',
  TITLE: '',
  NAME: ''
};

module.exports = env;
