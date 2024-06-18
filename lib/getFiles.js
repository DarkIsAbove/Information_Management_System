import { google } from "googleapis";

async function getFiles(authClient) {
    return new Promise(async (resolve,reject) => {
        const drive = google.drive({version: "v3",auth: authClient});

        const res = await drive.files.list({
            q: `'${process.env.GOOGLE_DRIVE_FOLDER}' in parents`,
            pageSize: 10,
            fields: 'nextPageToken, files(id, name)'
        });

        const files = res.data.files;
        resolve(files);
    });
}

export default getFiles;