const {Pool} = require('pg')

const pool = new Pool ({
    database: 'dating_app',
    user:     'khaliaparris',
    password: ''
})

module.exports = pool;