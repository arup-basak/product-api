const authorization = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Unauthorized - No Authorization Header Found" });
    }
    // TODO("Authoziation Will Added Later")
    next();
  };
  
  export default authorization;
  