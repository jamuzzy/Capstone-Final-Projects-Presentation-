const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 //Here we use the tenary functio
    //constant variable will store the error outcomeif what is set in the controller is true else it show 500 err msg
    res.status(statusCode)
  
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  }
  
  module.exports = {
    errorHandler,
  }