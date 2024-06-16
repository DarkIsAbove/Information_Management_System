import mysqldump from "mysqldump";
import getFiles from "../lib/getFiles.js";
import authorize from "../lib/googleAuthorize.js";
import updateFile from "../lib/updateFile.js";

const backUpFilePath = './database/database.backup.sql';

async function createABackup() {
    return mysqldump({
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'info_management',
        },
        dumpToFile: backUpFilePath,
    });
}

async function sendFileToDrive() {
    authorize().then(async(jwt) => {
        try {
            const files = await getFiles(jwt);
            const file = files[0];

            const fileId = file.id;

            updateFile(jwt,fileId,{
                file: backUpFilePath,
                mimeType: "application/sql"
            })
        } catch (e) {
            console.log(e)
        }
    });
}

function backup() {
    createABackup().then(() => {
        sendFileToDrive();
    }).catch(error => console.log(error));
}

export default backup;
