const keyService = require("../services/key.service");

const keyController = {
  createKey : (req,res) =>{
    try {
      const {password} = req.body;
      const key = keyService.generateAcceptKey(password)
      return res.status(200).json({key})
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  }
}

module.exports = keyController