const express = require("express")
const router = express.Router()

const ImageModel = require("../models/ImageData")
const TextModel = require("../models/TextData")

router.get("/", ((req, res) => {

    const imageData = ImageModel.find({}, function (err, data1) {
        if (err) {
            return res.status(200).send({
                message: "Data fetch failed",
                err: err
            })
        } else {
            const textData = TextModel.find({}, function (err, data2) {
                if (err) {
                    return res.status(200).send({
                        message: "Data fetch failed",
                        err: err
                    })
                } else {
                    array = data1.concat(data2)
                    array.sort(function(a,b){
                        return new Date(b.date) - new Date(a.date);
                      });
                    res.send({message: "Data fetched successfully!", data: array})
                }
            });
        }
    });


}))

module.exports = router