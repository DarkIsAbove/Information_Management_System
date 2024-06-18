import mysql from "mysql";
import child_process from "child_process";

function createADump(filepath) {
    return new Promise((resolve,reject) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'info_management'
        });
        
        // Connect to MySQL server
        connection.connect(err => {
            if (err) {
                reject('Error connecting to database: ' + err.stack);
                return;
            }
            console.log('Connected to database as id ' + connection.threadId);
        
            // Export database
            exportDatabase(connection, filepath, () => {
                console.log('Database exported successfully to ' + filepath);
                // Close MySQL connection
                connection.end(err => {
                    if (err) {
                        reject('Error closing database connection: ' + err.stack);
                        return;
                    }
                    resolve('Database connection closed.');
                });
            });
        });
        
        // Function to export database
        function exportDatabase(connection, filepath, callback) {
            const exportCommand = `C:\\xampp\\mysql\\bin\\mysqldump --host=${connection.config.host} --user=${connection.config.user} ${connection.config.database} > ${filepath}`;
        
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
                callback();
            });
        }
    });
}

export default createADump;