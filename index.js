import bodyParser from "body-parser"
import express from "express"
import router  from "./routes/users.js"

import dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.PORT)

const app = express()

app.use(bodyParser.json())

app.use('/users', router)

app.listen(process.env.PORT, () => {
    console.log(`Iam running on port ${process.env.PORT}`)
})