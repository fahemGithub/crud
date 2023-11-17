import bodyParser from "body-parser"
import express from "express"
import router  from "./routes/users.js"

const app = express()
const port = 5000

app.use(bodyParser.json())

app.use('/users', router)

app.listen(port, () => {
    console.log(`Iam running on port ${port}`)
})