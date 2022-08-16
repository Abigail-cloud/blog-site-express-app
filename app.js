const express = require('express');
const app = express();
const path = require('path');
const fileUpload= require('express-fileupload')

let startPath = path.join(__dirname, "public");

app.use(express.static(startPath));
app.use(fileUpload());

//routes

app.get('/', (req, res) => {
    res.sendFile(path.join(startPath, "site/home.html"))
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(startPath, "/site/editor.html"))
})

//Upload routes

// upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            // our image upload path
            res.json(`uploads/${imagename}`)
        }
    })
})





const port = process.env.PORT ||3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})