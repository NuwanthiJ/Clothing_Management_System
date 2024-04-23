import express from 'express'
import { addproduct, getProduct, updateProduct, deleteProduct,getById } from '../controllers/product.controller.js'
const routers = express.Router()

routers.post('/', addproduct)
routers.get('/', getProduct)
routers.get('/:id',getById)
routers.put('/:id', updateProduct)
routers.delete('/:id', deleteProduct)

export default routers