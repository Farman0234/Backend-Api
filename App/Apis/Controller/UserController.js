var UsersModel = require('../Model/userModel')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { model } = require('mongoose')

module.exports = {

    register: function (req, res) {
        UsersModel.create(req.body)
            .then(iteams => {
                res.send("You have Signup now:")
            })
            .catch(err => {
                res.send(" Something went wrong!" + err)
            })
    }
    ,
    // authenticate means login
    
  
    authenticate : async function (req, res, next) {
    try {
        const userInfo = await UsersModel.findOne({ email: req.body.email });
        if (!userInfo) {
            return res.status(401).json({ status: "error", message: "Authentication failed." });
        }

        const isMatch = await bcrypt.compare(req.body.password, userInfo.password);
        if (isMatch) {
            const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
            return res.json({ status: "success", message: "Authentication successful!", token: token });
        } else {
            return res.status(401).json({ status: "error", message: "Authentication failed." });
        }
    } catch (err) {
        return next(err);
    }
}


}

