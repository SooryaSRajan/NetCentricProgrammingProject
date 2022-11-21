const express = require("express")
const router = express.Router()

//options models
const TextOptionsModel = require("../models/TextOptions")
const ImageOptionsModel = require("../models/ImageOptions")

router.get("/add", async (req, res) => {

    let imageCategories = ["PHOTOGRAPHY", "ART", "DESIGN", "MUSIC", "WRITING", "FILM", "CRAFTS", "DIY", "FOOD", "COMEDY", "ANIMATION", "GAMING", "LITERATURE", "TECHNOLOGY", "OTHER"]
    let textCategories = ["BLOG", "POETRY", "FICTION", "NONFICTION", "ESSAY", "ARTICLE", "OTHER"]

    //convert to object {option:data} using for loop
    let imageCategoriesObj = []
    let textCategoriesObj = []

    for (let i = 0; i < imageCategories.length; i++) {
        imageCategoriesObj.push({ option: imageCategories[i] })
    }

    for (let i = 0; i < textCategories.length; i++) {
        textCategoriesObj.push({ option: textCategories[i] })
    }

    //insert into database
    TextOptionsModel.insertMany(textCategoriesObj)
    ImageOptionsModel.insertMany(imageCategoriesObj)


    res.send("Added successfully")

})

router.get("/addTextOption/:data", async (req, res) => {

    let data = req.params.data
    let textOption = new TextOptionsModel({
        option: data
    })

    textOption.save()
        .then((result) => {
            res.send("Option added successfully")
        }
        ).catch(err => {
            console.log(err)
            return res.status(500).json("Internal server error, error: " + err.message);
        });

})

router.get("/addImageOption/:data", async (req, res) => {

    let data = req.params.data
    let imageOption = new ImageOptionsModel({
        option: data
    })

    imageOption.save()
        .then((result) => {
            res.send("Option added successfully")
        }
        ).catch(err => {
            console.log(err)
            return res.status(500).json("Internal server error, error: " + err.message);
        });

})

//route for text options
router.get("/text", async (req, res) => {
    let data = await TextOptionsModel.find({});
    res.send(data)
})

router.get("/image", async (req, res) => {
    let data = await ImageOptionsModel.find({});
    res.send(data)
})

module.exports = router