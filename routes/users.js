import express from "express"
const router = express.Router()

const users = [
    {
        "id": 1,
        "name": "fahem",
        "last_name": "Chettout",
        "age": 31
    },
    {
        "id": 2,
        "name": "reda",
        "last_name": "Bekka",
        "age": 28
    }
]

// Get all users
router.get('/', (req, res) => {
    res.send(users)
})

// Get user by id
router.get("/:id", (req, res) => {
    const {id} = req.params
    const user = users.find((item) => {
        return item.id == id
    })
    res.send(user)
})


export default router
