const Express = require('express')
const router = Express.Router()

const { CreateService } = require("../05-controllers/03-servicesController")
const {serviceImageUpload} =require("../03-middlewares/imageUpload")
const { GetServices } = require('../05-controllers/03-servicesController')


router.post("/create-service",serviceImageUpload,CreateService)
router.get("/get-service", GetServices)

module.exports = router