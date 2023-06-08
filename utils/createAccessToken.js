const jwt = require("jsonwebtoken");

const createAccessToken = (email) => {
    const accessToken = jwt.sign(
        {
            email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "5m" }
    );

    return accessToken;
};

module.exports = createAccessToken;
