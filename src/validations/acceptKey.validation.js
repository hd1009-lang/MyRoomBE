const acceptKeyValidation = (req, res, next) => {
    try {
        const { password } = req.body;
        if (!password) return res.status(400).json({ msg: 'Yêu cầu nhập mật khẩu' });
        return next()
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
};

module.exports = acceptKeyValidation
