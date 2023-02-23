const {GeneralError, BadRequest, NotFound} = require('../utils/error')
const handleErrors = (err, req, res, next) =>{
  if (err instanceof NotFound){
    return res.status(err.getstatusCode()).json({
      status:"Error",
      message: err.message
    })
  }
  else if(err instanceof BadRequest){
    return res.status(err.getstatusCode()).json({
      status:"Error",
      message: err.message
    })
  }

  return res.status(500).json({
    status:"general error!",
    message: "something went wrong!"
  })
}
module.exports = handleErrors;
