const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');




connectDB();
const app  = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log('Server is started running on port '+port))