const express = require("express")
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')



router.post('/chat', authMiddleware.authUser)



module.exports = router