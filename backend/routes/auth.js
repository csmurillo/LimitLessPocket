const express = require('express');
const {login, signup,deleteAccount}=require('../controller/auth');

const router = express.Router();

router.post('/login',login);
router.post('/signup', signup);
router.delete('/delete/:userId',deleteAccount);

module.exports = router;
