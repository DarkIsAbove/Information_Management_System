import jwt from "jsonwebtoken";

const AccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET , {
    expiresIn: "1h",
  });
};

const refreshAccessToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

export { AccessToken, refreshAccessToken };