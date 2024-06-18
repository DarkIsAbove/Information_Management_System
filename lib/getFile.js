import { google } from "googleapis";
import fs from 'fs';

async function getFile(authClient,fileId,filePath) {
    return new Promise(async (resolve,reject) => {
        const drive = google.drive({version: "v3",auth: authClient});

        const res = await drive.files.get(
            {fileId,alt: 'media'},
            {responseType: 'stream'},
            (err,res) => {
                if (err) return console.log(err);

                const destination = fs.createWriteStream(filePath);
                let progress = 0;

                res.data
                .on('end', () => {
                  resolve('File downloaded successfully.');
                  destination.close();
                })
                .on('error', err => {
                  reject('Error downloading file.');
                })
                .on('data', d => {
                  progress += d.length;
                  if (process.stdout.isTTY) {
                    process.stdout.clearLine();
                    process.stdout.cursorTo(0);
                    process.stdout.write(`Downloaded ${progress} bytes`);
                  }
                })
                .pipe(destination);
            }
        );
    });
}

export default getFile;