const{ Pool } = require('pg');

class ServicioPG{

    constructor(){
        this.pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "bookmarks",
            password: "alexyaleja",
            port: 5432
        });
    }

   async ejecutarSQL(sql){
        let respuesta = await this.pool.query(sql)
        return respuesta;
    }
}

module.exports = ServicioPG;