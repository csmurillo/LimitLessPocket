const User = require('../models/user');
const bcrypt = require('bcrypt');


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
    
};

exports.deleteAccount = (req,res)=>{

};


