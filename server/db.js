const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "books_admin",
  password: "462462",
  port: 5432,
});

module.exports = pool;
