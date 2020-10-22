require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      throw new Error();
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    req.token = token;
    req.user = user;

    next();
  } catch (e) {
    console.log(e);
    res.send({ message: "Please authenticate" });
  }
};

module.exports = authenticate;
