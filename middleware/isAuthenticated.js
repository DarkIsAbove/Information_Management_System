import jwt from "jsonwebtoken";
import { AccessToken } from "../lib/genJWT.js";

function isAuthenticated(req,res,next) {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;
    
    const endpoint = req.originalUrl.split("/");

    const isView = endpoint[1] === "view";

    if (!accessToken && !refreshToken) {
        const missingTokensError = {message: "Missing access token and refresh token!"};
        if (!isView) return res.status(401).json(missingTokensError);
        
        req.error = missingTokensError;
        return next();
    }

    try {
        const verifyAccessToken = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
        
        req.user = verifyAccessToken;

        if (req.user) return next();
    } catch (accessTokenError) {
        if (!refreshToken) {
            const missingRefreshTokenError = {message: "Missing refresh token!"};
            if (!isView) return res.status(401).json(missingRefreshTokenError);

            req.error = {message: "Missing refresh token!"};
            return next();
        }
    
        const verifyRefreshToken = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
        const newAccessToken = AccessToken({username: verifyRefreshToken.username,role: verifyRefreshToken.role});
            
        res.cookie("accessToken",newAccessToken, {httpOnly: true});

        req.user = verifyRefreshToken;

        if (req.user) next();
    }
}

export default isAuthenticated;