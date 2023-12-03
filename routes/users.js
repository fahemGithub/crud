import express from "express"
const router = express.Router()

router.get('/', (req, res) => {
    res.send("salam")
})


export default router
