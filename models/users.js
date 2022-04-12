const pool = require('../db')

class Users {
    static async getAllUsers(){
        const sql = `select * from location`;
        const dbResult = await pool.query(sql)
        return dbResult.rows
    }
}

module.exports = Users;