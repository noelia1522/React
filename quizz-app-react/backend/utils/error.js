class GeneralError extends Error {
    constructor(message){
      super();
      this.message= message;
    }
  
    getstatusCode(){
      if(this instanceof NotFound)
      return 404;
      if(this instanceof BadRequest)
      return 400;
    }
  }
  
  class NotFound extends GeneralError{}
  class BadRequest extends GeneralError{}
  
  module.exports = {GeneralError, BadRequest, NotFound}