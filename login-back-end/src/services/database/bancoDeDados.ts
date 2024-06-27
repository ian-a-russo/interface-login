const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Login",
  password: "120506",
  port: 5432,
});

export { pool };
