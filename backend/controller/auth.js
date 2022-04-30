const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.signup = (req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hashPassword) {
            const newUser = new User({
                ...req.body,
                password:hashPassword
            }); 
            newUser.save((err,user)=>{
                if(err){
                    return res.status(400).json({
                        error:"User already exists"+err
                    });
                }
                user.password=undefined;
                res.status(200).json({user});
            });

        });
    });
};

exports.login = (req,res)=>{
    const {email,password}=req.body;
    User.findOne({email}, async (err,user)=>{
        if(err||!user){
            return res.status(401).json({
                error:"Account does not exist"
            });
        }
        // check password
        const checkPassword = await bcrypt.compare(password,user.password);
        if(!checkPassword){
            return res.status(401).json({
                error:"Please check password"
            });
        }
        // generate token
        const token = jwt.sign({id:user._id},process.env.JWT_PRIVATE_KEY);
        user.password=undefined;
        res.status(200).json({
            token,
            user
        });
    });
};

exports.deleteAccount = (req,res)=>{
    let user = req.user;
    user.remove((err,deletedAccount)=>{
        if(err){
            return res.status(400).json({
                error:"Account could not be deleted at this moment"
            });
        }
        res.json({
            message: 'Account deleted successfully'
        });
    });
};


