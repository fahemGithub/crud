import express from "express"
const router = express.Router()

const users = [
    {
        "name": "fahem",
        "last_name": "Chettout",
        "age": 31
    },
    {
        "name": "reda",
        "last_name": "Bekka",
        "age": 28
    }
]

// Get all users
router.get('/', (req, res) => {
    res.send(users)
})


export default router
