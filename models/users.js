const pool = require('../db')

class Users {
    static async getAllUsers(){
        const sql = `select * from "User Login"`;
        const dbResult = await pool.query(sql)
        return dbResult.rows
    }
    static async userLogin(email, password){
        const sql = `insert into login (email,password) values($1,$2)`
         const dbResult = await pool.query(sql, [email,password])
         return dbResult.rows

    }
}

module.exports = Users;