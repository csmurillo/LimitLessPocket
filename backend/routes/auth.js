const express = require('express');
const {login, signup,deleteAccount}=require('../controller/auth');
const {userId} =require('../controller/user');
const router = express.Router();

router.post('/login',login);
router.post('/signup', signup);
router.delete('/delete/:userId',deleteAccount);

router.param('userId',userId);


module.exports = router;
