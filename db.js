const {Pool} = require('pg')

const connectionLocal = {
    database: 'dating_app',
    user:     'khaliaparris',
    password: '',
    host: 'localhost',
    port: 5432
};

const connectionProduction = {
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal)

const query = (queryText, queryParams) => {
    return pool.query(queryText, queryParams) //return the entire database promise
}

module.exports = {query};