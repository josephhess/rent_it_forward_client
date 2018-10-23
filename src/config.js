
// require('dotenv').config();
exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  'mongodb://localhost/jwt-auth';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
exports.BASE_URL = 'http://localhost:3000/';
exports.API_BASE_URL = 
  process.env.REACT_APP_API_BASE_URL || 
  'http://localhost:8080/api';

