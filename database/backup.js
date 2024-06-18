import getFiles from "../lib/getFiles.js";
import authorize from "../lib/googleAuthorize.js";
import updateFile from "../lib/updateFile.js";
import uploadFile from "../lib/uploadFile.js";
import fs from 'fs';
import createADump from "./createADump.js";

const backUpFilePath = './database/database.backup.sql';

async function createABackup() {
    return createADump(backUpFilePath);
}

async function sendFileToDrive() {
    authorize().then(async(jwt) => {
        try {
            const files = await getFiles(jwt);     

            if (files.length === 0) {
                uploadFile(jwt,{
                    file: backUpFilePath,
                    mimeType: "application/sql"
                });
            } else {
                const file = files[0];
                const fileId = file.id;
                updateFile(jwt,fileId,{
                    file: backUpFilePath,
                    mimeType: "application/sql"
                })
            };
        } catch (e) {
            console.log(e)
        }
    });
}

function backup() {
    createABackup().then(() => {
        fs.readFile(backUpFilePath, 'utf8', function(err, data){
            if (err) throw err;
        
            // Prepend data to the file content
            const fileContent = "DROP DATABASE IF EXISTS info_management;\nCREATE DATABASE info_management;\nUSE info_management;\n" + data;
        
            // Write the new content back to the file
            fs.writeFile(backUpFilePath, fileContent, 'utf8', function(err) {
                if (err) throw err;
                console.log('File updated successfully!');
                sendFileToDrive();
            });
        });
    }).catch(error => console.log(error));
}

export default backup;
