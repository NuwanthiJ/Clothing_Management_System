import express from 'express'
import { addAdmin,getAdmin } from '../controllers/admins.controller.js'
const routers = express.Router()

routers.post('/', addAdmin)
routers.get('/', getAdmin)

export default routers