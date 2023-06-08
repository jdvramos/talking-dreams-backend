const jwt = require("jsonwebtoken");

const createRefreshToken = (email) => {
    const refreshToken = jwt.sign(
        {
            email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "3d" }
    );

    return refreshToken;
};

module.exports = createRefreshToken;
