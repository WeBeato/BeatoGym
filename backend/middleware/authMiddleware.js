// modules
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { model } = require('mongoose');


const protect = async (req , res , ndext ) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');

            next();
        }catch(error){
            console.log(error);
            res.status(401).json({message: 'توکن نامعتبر است'});
        }
    }

    if(!token) {
        res.status(401).json({message: 'دسترسی غیرمجاز؛ توکنی ارسال نشده است'});
    }
};

module.exports = {protect};

