const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 6000

app.use(bodyParser.json())
app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

// DB config
const db = require('./config/keys').mongoURI

mongoose
    .connect( db, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err))


app.use('/applicant', require('./routes/Applicant'))

app.use('/job', require('./routes/Job'))


app.listen(PORT, () => console.log(`App running on port: ${PORT}`))