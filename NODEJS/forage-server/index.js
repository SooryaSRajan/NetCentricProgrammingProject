const express = require('express')
const app = express()
const imageUpload = require('./routes/image-form')
const textUpload = require('./routes/text-form')
const getPosts = require('./routes/get-posts')
const managePosts = require('./routes/manage-posts')
const getDropdownData = require('./routes/get-dropdown-data')
const path = require("path");
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}));

//files folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/IMAGES', express.static(path.join(__dirname, '..', '..', 'IMAGES')))

//html files public folder
app.use('/', express.static(path.join(__dirname, '..', '..', 'HTML')))
app.use('/HTML', express.static(path.join(__dirname, '..', '..', 'HTML')))

//css files public folder
app.use('/', express.static(path.join(__dirname, '..', '..', 'CSS')))
app.use('/CSS', express.static(path.join(__dirname, '..', '..', 'CSS')))

//JS files
app.use('/JS', express.static(path.join(__dirname, '..', '..', 'JS')))

//angular files
app.use('/', express.static(path.join(__dirname, '..', '..', 'ANGULAR')))
app.use('/HTML', express.static(path.join(__dirname, '..', '..', 'ANGULAR')))

require("./config/database_connection")();

app.get("/", (req, res) => {
    res.send(`Server running on port ${PORT}`)
})

app.use('/uploadImage', imageUpload)
app.use('/uploadText', textUpload)
app.use('/getPosts', getPosts)
app.use('/managePosts', managePosts)
app.use('/getDropdownData', getDropdownData)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
