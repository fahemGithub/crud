const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 5000

app.use(bodyParser.json())

const userRoute = require('./routes/users')
app.use('/users', userRoute)

app.listen(port, () => {
    console.log(`Iam running on port ${port}`)
})