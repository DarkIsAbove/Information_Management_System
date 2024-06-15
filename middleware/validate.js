import validator from "../validators/validator.js";

function validate(valid) {
    return (req,res,next) => {
        const result = validator(valid,req.body);
        if (!result.isSuccess) return res.status(400).json({message: result.message});
        next();
    }
}

export default validate;