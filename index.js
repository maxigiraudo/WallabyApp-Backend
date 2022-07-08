require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const nftRoutes = require('./routes/nftRoutes')

const authUser = require('./controllers/authController')
const Usuario = require('./models/user')
const user = require('./controllers/usuarioController')

const Usuario = require('./models/user')
const authUser = require('./controllers/authController')

const cors = require('cors');


const conectarDB = require('./db')
conectarDB()

// express app
const app = express()
// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// console.log(asdd)

// routes
app.use('/api', nftRoutes)
// app.use('/registro',user)
// app.use('/login',authUser)

//endpoint donde veremos mediante un json los usuarios

app.get('/usuariosRegistrados', (req, res) => {
  Usuario.find()
      .then((result) => {
          res.send(result)
      })
      .catch(err => res.status(404).send(err));
})

//conext to db
const PORT = process.env.PORT || 4000
        app.listen(PORT, () => {
            console.log('listening for request on port',PORT)
        })




        