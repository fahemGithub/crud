const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send("Hellol World")
})

app.listen(port, () => {
    console.log(`Iam running on port ${port}`)
})