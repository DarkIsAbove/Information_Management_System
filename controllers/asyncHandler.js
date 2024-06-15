const asyncHandler = fn => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        if (error.errno === 1062) return res.status(400).send({message: "Duplicate Entry."});
        console.error("Error:", error);
        res.status(500).send({message: "Internal Server Error"});
      }
    };
  };
  
  export default asyncHandler;