const express = require('express')// framework
const router = express.Router();//framework function
const bedroomRoute = require('./bedroom')

router.use('/bedroom',bedroomRoute)

module.exports = router;