const Service = require('../services/timeline.service')

const TimelineController = {
    addTimeline:async(req,res)=>{
      try {
        // const {avatar,logo} = req.files;
        const object = {...req.files,...req.body}
        console.log(object);
        // await Service.addTimeline(img)
        return console.log('ok');;
      } catch (error) {
        return res.status(400).json({msg:error.message})
      }
    },
    dowloadCV: async (req, res) => {
        try {
            const file = `${process.cwd()}/src/assets/CV_HoangDai_IternFE.pdf`;
            return res.download(file);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = TimelineController;
