// moduels
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateUniqueCode = require('../utils/generateCode');

// main code 

// date-user
exports.register = async (req , res) => {
    try {
        const {fullName , phoneNumber , password , planType , sessions } = req.body;
        
        // uset-chek
        let user = await User.findOne({phoneNumber});
        if (user) {
            return res.status(400).json({message: 'این شماره موبایل قبلاً ثبت شده است' });
        }

        // sec-pass
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // unic code 
        const uniqueCode = generateUniqueCode();

        // new user
        user = new User({
            fullName,
            phoneNumber,
            password: hashedPassword,
            uniqueCode,
            planType: planType || 'none',
            sessions: sessions || 0
        });

        // save user
        await user.save();

        res.status(201).json({
            message:'ثبت‌نام با موفقیت انجام شد',
            // return to front-end for show to user
            uniqueCode: user.uniqueCode
        });

    } catch (err) {
        res.status(500).json({ 
            message: "خطای سرور",
            error: err.message, 
            stack: err.stack  
        });
    }
};
