const db = require('../db')

class Users {
    static getUsers(){
        const sql = `select * from login`;
        return db.query(sql).then(results => { return results.rows})
    }
    static async userLogin(email, password){
        const sql = `insert into login (email,password) values($1,$2)`
         const dbResult = await pool.query(sql, [email,password])
         return dbResult.rows

    }
}

module.exports = Users;