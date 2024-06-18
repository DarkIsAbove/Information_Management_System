import 'dotenv/config';
import authorize from "../lib/googleAuthorize.js";
import getFile from '../lib/getFile.js';
import getFiles from "../lib/getFiles.js";
import generateDatabase from './generate.js';
import mysql from "mysql";
import fs from "fs";
import child_process from "child_process";


const filepath = "./database/database.backup.sql";

async function retrieveBackup() {
    return authorize().then(async(jwt) => {    
        const files = await getFiles(jwt);
        const file = files[0]; 

        return getFile(jwt,file.id,filepath);  
    });
}

async function restoreBackup() {
    retrieveBackup().then(() => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'reback'
          });
          
            // Connect to MySQL server
            connection.connect(err => {
              if (err) {
                console.error('Error connecting to database: ' + err.stack);
                return;
              }
              console.log('Connected to database as id ' + connection.threadId);

              const exportCommand = `C:\\xampp\\mysql\\bin\\mysql --host=${connection.config.host} --user=${connection.config.user} ${connection.config.database} < ${filepath}`;
        
            // Execute mysqldump command
            child_process.exec(exportCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error exporting database: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                   // Close MySQL connection
              connection.end(err => {
                if (err) {
                  console.error('Error closing database connection: ' + err.stack);
                  return;
                }
                console.log('Database connection closed.');
              });
            }); 
        
            });
    });
}

restoreBackup(); 

// MySQL database connection configuration
