import 'dotenv/config';
import express from "express";
import cookieParser from 'cookie-parser';
import { connectDatabase } from './database/database.js';
import winston from 'winston';
import expressWinston from 'express-winston';
import cron from "node-cron";
import backup from './database/backup.js';

const app = express();
const PORT = 8080;  

// redirect to view.
app.get("/", function(req,res) {
    res.redirect("/view");
});

// Log the whole request and response body
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');

// Logger makes sense before the router
app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all:true
        }),
        winston.format.label({
            label:'[LOGGER]'
        }),
        winston.format.timestamp({
            format:"YY-MM-DD HH:mm:ss"
        }),
        winston.format.printf(
            info => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
        )
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));

app.use(express.static("./public"));
app.use(express.json());
app.use(cookieParser());

import authRoute from "./routes/auth.route.js";
import apiRoute from "./routes/api.route.js";
import publicRoute from "./routes/view.route.js";

app.use("/api/auth",authRoute);
app.use("/api",apiRoute);
app.use("/view",publicRoute);

// Error logger makes sense after the router
app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all:true
        }),
        winston.format.label({
            label:'[LOGGER]'
        }),
        winston.format.timestamp({
            format:"YY-MM-DD HH:mm:ss"
        }),
        winston.format.printf(
            info => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
        )
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; }
    
     // optional: allows to skip some log messages based on request and/or response
}))

app.listen(PORT, (err) => {
    connectDatabase().then(data => {
        if (err) {
            return console.log(err);
        }   
    
        console.log(`http://localhost:${PORT}`);

        cron.schedule("2 * * * * *", () => {
            console.log("backup is sent to the drive!");
            backup();
        });
    });
});