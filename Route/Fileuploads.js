// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const multer = require('multer');

// var MongoClient = require('mongodb').MongoClient;
// const app = express();
// // IMAGE UPLOAD CODE IN NODE.JS
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'Uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname);
//     }
// });
// // FILE_FILTER WHICH IS PERMSSION FOR UPCOMING FILES FROM ANGULAR
// const fileFilter = (req, file, cb) => {
//     // ACCEPT OR REJECT A FILE
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4' || file.mimetype === 'audio/ogg'
//         || file.mimetype === 'audio/mp3' || file.mimetype === 'audio/x-m4a' || file.mimetype === 'application/octet-stream'
//         || file.mimetype === 'application/pdf') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };
// // STORE THIS IMAGE IN A VARIABLE TO UPLOAD T   O DATABASE
// const upload = multer({
//     storage: storage,
//     //DEFINE THE SIZE OF IMAGE
//     limits: {
//         fileSize:  1024 * 1024 * 16  // 16MB Size
//     },
//     fileFilter: fileFilter
// });
// //..............................// Image Upload Code In node Js//........................
// const categoryModel = require('../App/Apis/Model/categroyModel')

// router.post("/", upload.single('file'), (req, res, next) => {
//     if(req.file.mimetype=="image/png" || req.file.mimetype=="image/jpeg" || req.file.mimetype=="image/jpg" || req.file.mimetype=="video/mp4"){

//     const Category = new categoryModel({
//         _id: new mongoose.Types.ObjectId(),
//         title:req.body.title,
//         path: req.file.path,
//         name: req.file.filename,
//         type:req.file.mimetype,
//     });
//     Category.save().then(result => {
//         console.log(result);
//        res.send( req.file.filename);
//     });
// }
// });
// router.get('/', (req, res, next) => {
//     categoryModel.find(function (request, response) {
//         res.status(200).json(response);
//     });
// });

// module.exports = router;






// PACKAGES INSTALLINGS
const mongoose = require ('mongoose')
const multer = require('multer')
const express = require('express')
const router = express.Router()

// connecting the file's "categoryModel" in "FileUplods"

var categoryModel = require('../App/Apis/Model/categroyModel')


// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage });

// Route to handle file upload
router.post("/", upload.single('file'), (req, res, next) => {
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "video/mp4 " , "application/pdf", "word/doc","xls/xlsm"];
    if (allowedMimeTypes.includes(req.file.mimetype)) {
        const Category = new categoryModel({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            path: req.file.path,
            name: req.file.filename,
            type: req.file.mimetype,
        });

        Category.save()
            .then(result => {
                console.log(result);
                res.status(201).send(req.file.filename);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: err.message });
            });
    } else {
        res.status(400).json({ message: 'Invalid file type' });
    }
});




module.exports = router

















// const express = require('express')
// const router = express.router();
// const mongoose = require('mongoose');
// const multer = require('multer');
// const categoryModel = require('../App/Apis/Model/categroyModel');

// var MongoClient = require('mongoose').MongoClient;
// const app = express();

// //Storage Working

// const Storage = multer.diskStorage({
//     destination: function(req, file, cd){
//         cd(null, 'Uploads');
//     },
//     filename: function(req, file,cd){
//         cd(null, Date.now() + file.originalname);
//     }
// });

// const upload = multer({
//     storage: storage,

//     limits:{
//         fileSize: 1024 * 1024 *16   //16MB Size
//     },
//     fileFilter: fileFilter
// // 
// });

// const fileFilter = (req, file, cd) =>{

//     if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4' || file.mimetype === 'audio/ogg'
//     || file.mimetype === 'audio/mp3' || file.mimetype ===  'audio/x-m4a' || file.mimetype === 'application/octet-stream'
//     || file.mimetype === 'application/pdf'){
//         cd(null, true);
//     }else {
//         cd(null, false);
//     }
// }

// const categoryModel = require('../App/Apis/Model/categroyModel')

// router.post("/", upload.single("file"), (req, res, next) => {
//     if(req.file.mimetype=="image/jpeg" || req.file.mimetype=="image/png" || req.file.mimetype=="video/mp4"){
//         const Category = new categoryModel({
//         _id: mongoose.Types.ObjectsId(),
//         tittle: req.body.tittle,
//         path: req.file.path,
//         name: req.file.filename,
//         type: req.file.mimetype,
//     });
//     Category.save().then(result => {
//         console.log(result);
//         res.send( req.file.filename);
//     });

// }})