import express from "express"
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../contollers/user.js"
const router = express.Router()

router.get('/', (req, res) => {
    res.send("salam")
})
// Get all users
router.get('/', getUsers)
// Get user by id
router.get("/:id",getUserById)
// CreateUser
router.post('/create', createUser)
// Delete
router.delete('/:id', deleteUser)
// Update user
router.put('/:id', updateUser)


export default router
