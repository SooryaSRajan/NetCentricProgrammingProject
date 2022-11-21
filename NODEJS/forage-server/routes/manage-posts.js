const express = require("express")
const router = express.Router()

const TextModel = require("../models/TextData")
const ImageModel = require("../models/ImageData")

//delete posts
router.post("/deletepost", (req, res) => {
    console.log(req.body)
    if (req.body.type === "text") {
        TextModel.findByIdAndDelete(req.body.id)
            .then((result) => {
                res.redirect("/")
            }
            ).catch(err => {
                console.log(err)
                return res.status(500).json("Internal server error, error: " + err.message);
            });
    } else if (req.body.type === "image") {
        ImageModel.findByIdAndDelete(req.body.id)
            .then((result) => {
                res.redirect("/")
            }
            ).catch(err => {
                console.log(err)
                return res.status(500).json("Internal server error, error: " + err.message);
            });
    }
})

//update
router.put("/update", (req, res) => {
    console.log(req.body)
    if (req.body.type === "text") {
        //data is in body, get data and update data that is not null
        TextModel.findByIdAndUpdate(req.body.id,

            {
                text: req.body.text,
                title: req.body.title,
                desc: req.body.desc,
                date: req.body.date,
                price: req.body.price,
                category: req.body.category,
                comment: req.body.comment,
                view: req.body.view
            },
            { new: true }
        ).then((result) => {
            res.redirect("/")
        }
        ).catch(err => {
            console.log(err)
            return res.status(500).json("Internal server error, error: " + err.message);
        })
    } else if (req.body.type === "image") {
        ImageModel.findByIdAndUpdate(req.body.id,

            {
                text: req.body.text,
                title: req.body.title,
                desc: req.body.desc,
                date: req.body.date,
                price: req.body.price,
                category: req.body.category,
                comment: req.body.comment,
                view: req.body.view
            },
            { new: true }
        ).then((result) => {
            res.redirect("/")
        }
        ).catch(err => {
            console.log(err)
            return res.status(500).json("Internal server error, error: " + err.message);
        })
    }
    else{
        console.log("FAILED");
    }
})


module.exports = router