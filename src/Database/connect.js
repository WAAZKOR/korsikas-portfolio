const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Rusyn_db",
    password: "M@rine58!!",
    port: 5432, // Default PostgreSQL port
});