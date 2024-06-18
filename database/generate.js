import mysql from "mysql";
import fs from "fs";

async function generateDatabase() {
    const files = fs.readdirSync("./database");

    let databaseSQL = "database.data.generated.sql";

    const connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    });
    
    connection.connect(async function(error) {
        if (error) return console.log(error);
        console.log("Connected to database.");

        const openFile = fs.openSync("./database/" + databaseSQL);
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
                console.log(e);
            }   

            // database already exist.
            if (errno == 1007) break;
        }
        console.log("Database created.");
        connection.end();
    });

}

export default generateDatabase;