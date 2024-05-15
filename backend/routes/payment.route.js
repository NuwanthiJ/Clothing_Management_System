import express from 'express'
import { createPayment, getPayment, updatePayment, deletePayment,getById } from '../controllers/payment.controller.js'

const routers = express.Router()

routers.post('/', createPayment)
routers.get('/', getPayment)
routers.get('/:id',getById)
routers.put('/:id', updatePayment)
routers.delete('/:id', deletePayment)


export default routers