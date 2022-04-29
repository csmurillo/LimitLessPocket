const express=require('express');
const app = express();
var cors = require('cors');

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors({origin: '*'}));

//routes
const authRoutes = require('./routes/auth');

app.use('/api',authRoutes);

app.listen(PORT, ()=>{
    console.log('listening in '+PORT);
});
