import express from "express"
import { createUser, deleteUser, getUserById, getUsers } from "../contollers/user.js"
const router = express.Router()

// Get all users
router.get('/', getUsers)
// Get user by id
router.get("/:id",getUserById)
// CreateUser
router.post('/create', createUser)
// Delete
router.delete('/:id', deleteUser)

export default router
