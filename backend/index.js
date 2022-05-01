const express=require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 3003;

// middleware
app.use(express.json());
app.use(cors({origin: '*'}));

// connect to mongodb
mongoose.connect('mongodb://admin:password@localhost:27017')
        .then(()=>{console.log('db connected');})
        .catch(()=>{console.log('error db');});

//routes
const authRoutes = require('./routes/auth');

app.use('/api',authRoutes);

app.listen(PORT, ()=>{
    console.log('listening in '+PORT);
});
