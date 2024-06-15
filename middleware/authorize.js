function authorize(roles = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req,res,next) => {
        const user = req.user;

        if (!roles.includes(user.role)) return res.status(401).json({message: "your role is not permitted to perform this request."});
        
        next();
    }
}

export default authorize;   