// const fs = require('fs')

const checkImg = (req,res,next)=>{
  try {
    if(!req.files ||  Object.keys(req.files).length < 2){
      return res.status(400).json({msg:"Kèm ảnh"})
    }
    // console.log(req.files);
    const {avatar, logo} = req.files
    if(avatar.mimetype !== 'image/png') return res.status(400).json({msg:"Ảnh avatar không hợp lệ"})
    if(logo.mimetype !== 'image/png') return res.status(400).json({msg:"Ảnh logo không hợp lệ"})
    return next();
  } catch (error) {
    return res.status(400).json({msg:"Lỗi nhập ảnh"})
  }
}

module.exports = checkImg