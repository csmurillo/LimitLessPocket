const User = require('../models/user');

exports.userId = (req,res,next,id)=>{
    User.findById(id)
        .exec((err,user)=>{
            if(err||!user){
                return res.status(401).json({
                    message:"User does not exist"
                });
            }
            req.user = user;
            next();
        });
};