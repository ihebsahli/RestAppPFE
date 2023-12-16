const multer = require("multer")
const path = require('path');

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads/Ingredients');
    },
    filename: function (request, file, callback) {
        callback(null, "ingredient" + Date.now() + path.extname(file.originalname));
    }
});

module.exports = multer({storage: storage})