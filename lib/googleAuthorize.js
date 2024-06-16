import apikey from "../google_apikey.json" assert {type: "json"};

import { google } from "googleapis";

const SCOPE = ['https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata'
  ];

async function authorize() {
    const jwtClient = new google.auth.JWT(
        apikey.client_email,
        null,
        apikey.private_key,
        SCOPE
    );

    await jwtClient.authorize();
    return jwtClient;
}

export default authorize;