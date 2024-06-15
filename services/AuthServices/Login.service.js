import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { AccessToken, refreshAccessToken } from "../../lib/genJWT.js";

async function LoginService(req,res) {
    const {
        username,
        password,
    } = req.body;

    const user = await User.findOne({
        where: {
            username
        },
        include: {
            employee: true
        }
    });
    console.log(user);
    if (!user) return res.status(400).json({message: "username or password is invalid."});

   const isSamePassword = await bcrypt.compare(password,user.password);

   if (!isSamePassword) return res.status(400).json({message: "username or password is invalid."});

    const accessToken = AccessToken({userId: user.id,username,role: user.role,employeeId: user.employeeId});
    const refreshToken = refreshAccessToken({userId: user.id,username,role: user.role,employeeId: user.employeeId});

    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(200).json({ accessToken, refreshToken });
}

export default LoginService;
