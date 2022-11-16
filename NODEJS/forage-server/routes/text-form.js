const express = require('express');
const router = express.Router();
const TextModel = require("../models/TextData")

router.post('/', (req, res) => {
    console.log(req.body);

    //validate
    if (!req.body.text || !req.body.title || !req.body.desc || !req.body.date || !req.body.price || !req.body.category) {
        return res.status(400).send("Please fill all the fields");
    } else {

        //make image data
        let textData = {
            title: req.body.title,
            desc: req.body.desc,
            date: req.body.date,
            price: req.body.price,
            category: req.body.category,
            text: req.body.text,
            comment: req.body.comment,
            status: req.body.status,
        }

        //save
        let textModel = new TextModel(textData);
        textModel.save()
            .then((result) => {
                // res.status(200).send("Text uploaded" + result);
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