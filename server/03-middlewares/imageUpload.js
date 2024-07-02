const multer = require('multer')

const serviceImageStroage = multer.diskStorage({
    destination: function( req, file, cb){
    cb(null,  "../client/public")
},
filename: function (req, file, cb){
    cb(null, "service_image_"+ Date.now() + ".jpg")
}
})
const serviceImageUpload = multer({
    storage: serviceImageStroage
}).single("image")

exports.serviceImageUpload = serviceImageUpload