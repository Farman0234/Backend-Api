const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')

// this line is copyed from the npm packesd
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//till here.

var studRoute = require("./Route/studRoutes")
app.use('/student',validateUser,studRoute)

var userRoute = require("./Route/userRoutes")
app.use('/user',userRoute)

var fileUploads = require("./Route/Fileuploads")
app.use('/upload', fileUploads)

function validateUser(req, res, next) {
    const secretKey = req.app.get('secretKey');
    console.log('Secret Key:', secretKey); // Log the secret key to verify it is retrieved

    jwt.verify(req.headers['x-access-token'], secretKey, function(err, decoded) {
         // req.headers['x-access-token']  This is just the path to enter in the header section  
         // req.app.get('secretKey') This is the secret key  that we had made it before & it should be secured.
        if (err) {
            return res.json({ 'Status': "authenticate", message: err.message });
        } else {
            req.body.id = decoded.id; // Assuming the token payload has an 'id' field
            next();
        }
    });
}
// "secretkey" is coming from the "userController"
// "set" is a method used to store a value
app.set('secretKey', "I am a developer 12332100");


require('./Database/Connection')

app.get("/",(req,res)=>{
    res.send("<h1>welcome to nodejs with express backend</h1>")
})

app.listen(5400,()=>{

    console.log("your server is running on port# 5400")
});





