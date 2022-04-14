//This code is used to connect  the server to the database using mongoose.
const mongoose = require('mongoose');

const connectDB = async () => { //the async function returns a promise
  try{
    const conn = await mongoose.connect('mongodb+srv://Auth:Auth700@sharedclust.ogds5.mongodb.net/Student?retryWrites=true&w=majority',{ useNewUrlParser: true })   //process.env.MONGO_URI)
    useNewUrlParser: true
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  }catch(error){
    console.log(error) //if the is an error in connection the try-catch throws exception
    process.exit(1) //exit the process
  }
}
module.exports = connectDB;