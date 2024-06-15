import mysql from "mysql";
import fs from "fs";
import readline from "readline";

// DATABASE CONNECTION
const dbCon = mysql.createPool({
    connectionLimit : 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

async function connectDatabase() {
    
    const connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    });
    
    connection.connect(function(error) {
        if (error) console.log(error);
        console.log("Connected to database.");
    });

    const openFile = fs.openSync('./database/database.data.generated.sql');
    const sql = fs.readFileSync(openFile).toString().replace(/\r|\n/g,"").split(";").filter(command => {
        if (command == "" || command == null) return false;
        return true;
    });

    fs.closeSync(openFile);

    for (let i = 0;i < sql.length;i++) {
        let errno;

        try {
            const query = await new Promise((resolve,reject) => {
                connection.query(sql[i], (error, results, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve("SQL command executed successfully!");
                })
            });
        } catch (e) {
            errno = e.errno;
        }   

        // database already exist.
        if (errno == 1007) break;
    }
    console.log("Database created.");
    connection.end();
    return "SUCCESS!";
}

export default dbCon;
export {dbCon, connectDatabase};