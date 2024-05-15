import express from 'express'
import { createUser, getUser, updateUser, deleteUser,getById } from '../controllers/user.controller.js'

const routers = express.Router()

routers.post('/', createUser)
routers.get('/', getUser)
routers.get('/:id',getById)
routers.put('/:id', updateUser)
routers.delete('/:id', deleteUser)

export default routers

