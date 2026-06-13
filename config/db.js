// config/db.js

// This code sets up a connection pool to a MySQL database using the mysql2 library, 
// and exports it for use elsewhere in your application.

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  // password: 'itsshaheer',
    password: '',
  database: 'college_freelance',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Use promise wrapper
const promisePool = pool.promise();

promisePool
  .query('SELECT 1')
  .then(() => console.log('✅ Connected to MySQL'))
  .catch((err) => console.error('❌ DB Connection Error:', err));

module.exports = promisePool;
