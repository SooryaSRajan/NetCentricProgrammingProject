//express route
const express = require('express');
const router = express.Router();
const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const Image = require('../models/imageData');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('destination ' + file);
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let fileName = uuidv4() + '-' + file.originalname
        console.log('filename ' + fileName);
        cb(null, fileName);
    }
});

const upload = multer({
    storage: storage,
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
});

router.post('/', upload.single("image"), (req, res) => {
    console.log(req.body);

    //validate
    if (!req.body.title || !req.body.desc || !req.body.date || !req.body.price || !req.body.category) {
        return res.status(400).send("Please fill all the fields");
    } else {

        //make image data
        let image = {
            title: req.body.title,
            desc: req.body.desc,
            date: req.body.date,
            price: req.body.price,
            category: req.body.category,
            image: req.file.filename,
            comment: req.body.comment,
            status: req.body.status,
        }

        //save
        let imageModel = new Image(image);
        imageModel.save()
            .then((result) => {
                res.redirect("/")
            }).catch(err => {
            //send the error message
            console.log(err)
            if (err.code === 11000) {
                return res.status(400).json("User already exists");
            } else {
                return res.status(500).json("Internal server error, error: " + err.message);
            }
        });
    }

});

module.exports = router;