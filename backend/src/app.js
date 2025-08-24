const express = require('express')
const cookieParser = require('cookie-parser')

// Routes

const authRoutes = require('./routes/auth.routes')
const chatRoutes = require("./routes/chat.route")


const app = express()

// middleware

app.use(express.json())
app.use(cookieParser())

// using routes

app.use('/api/auth', authRoutes)
app.use('/api/chat', chatRoutes)



module.exports = app