const timelineValidation = (req,res,next)=>{
  try {
    const {timeExp, experience} = req.body;
    if(!timeExp) return res.status(400).json({msg:"Nhập thời gian thực hiện"});
    if(!experience) return res.status(400).json({msg:"Nhập kinh nghiệm đạt được"});
    if(experience.length > 150) return res.status(400).json({msg:"Nhập không quá 150 kí tự"});
    return next()
  } catch (error) {
    return res.status(400).json({msg:"Lỗi trong quá trình nhập liệu"});
  }
}

module.exports = timelineValidation