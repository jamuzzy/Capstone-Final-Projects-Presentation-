const express = require('express');
const {errorHandler} = require('./backend/middleware/errorMiddle')
const connectDB = require('./backend/config/db')//We are exporting the db connection code 
const dotenv = require('dotenv').config; //here i'm calling the .env  file


const port = process.env.PORT || 5000;
const app = express(); //Invoking the express function dependency 

connectDB()

app.use(express.json())
app.use(errorHandler)
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals',require('./backend/routes/goalsRoute'));
app.use('/api/users',require('./backend/routes/userRoutes')); 

app.listen(port, ()=> console.log(`Server started on port ${port}`));//The port that the app listens is dynamically assigned by
//the host
