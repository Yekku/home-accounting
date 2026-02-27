require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/home_accounting',
  jwt: process.env.JWT_SECRET || 'dev-jwt-secret',
  jwtExpiresIn: parseInt(process.env.JWT_EXPIRES_IN || '3600'),
  port: parseInt(process.env.PORT || '5001'),
  nodeEnv: process.env.NODE_ENV || 'development',
};
