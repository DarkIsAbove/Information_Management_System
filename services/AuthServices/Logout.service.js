async function LogoutService(req,res) {

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return res.status(200).json({message: "Logout Succesfully!"});
}

export default LogoutService;
