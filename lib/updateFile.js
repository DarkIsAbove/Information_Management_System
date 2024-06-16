import { google } from "googleapis";
import fs from "fs";

async function updateFile(authClient,fileId,{file,mimeType} = {}) {
    return new Promise((resolve,reject) => {
        const drive = google.drive({version: "v3",auth: authClient});
        
        drive.files.update({
            media: {
                body: fs.createReadStream(file),
                mimeType
            },
            fields: "id",
            fileId
        }, (err,file) => {  
            if (err) return reject(err);
            resolve(file);
        });
    });
}

export default updateFile;