import dbCon from "./database.js";
import sqlstring from "sqlstring";

async function query(
        sql,
        parameters=[],
        callback=()=>{}
    ) {

    if (!Array.isArray(parameters)) parameters = [parameters];

    return new Promise((resolve,reject) => {
        let cleanedSQL = sql; 
        for (let i = 0;i < parameters.length;i++) {
            cleanedSQL = sqlstring.format(cleanedSQL, parameters[i]);
        }
        
        dbCon.query(cleanedSQL,parameters, function(error,result) {
            if (error) return reject(error);

            callback(result);
            resolve(result);
        })
    });
}

export default query;