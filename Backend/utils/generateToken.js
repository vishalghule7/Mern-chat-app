import jwt from 'jsonwebtoken';

const generateTokenAndSetCookies = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token , {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, // prevent xxs attacks
        sameSite: "strict", // csrf attacks cross site req forgery attacks
        secure: process.env.NODE_ENV !== "development",
    })
}; 

export default generateTokenAndSetCookies;