import { google } from "googleapis";
import fs from "fs";

async function uploadFile(authClient,{file,mimeType} = {}) {
    return new Promise((resolve,reject) => {
        const drive = google.drive({version: "v3",auth: authClient});
        

        const fileMetaData = {
            name: "database.backup.sql",
            parents: [process.env.GOOGLE_DRIVE_FOLDER]
        };

        drive.files.create({
            resource: fileMetaData,
            media: {
                body: fs.createReadStream(file),
                mimeType
            },
            fields: "id",
        }, (err,file) => {  
            if (err) return reject(err);
            resolve(file);
        });
    });
}

export default uploadFile;