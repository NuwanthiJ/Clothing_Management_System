import express from 'express'
import { createSales, getSales, updateSales, deleteSales,getById } from '../controllers/sales.controller.js'

const routers = express.Router()

routers.post('/', createSales)
routers.get('/', getSales)
routers.get('/:id',getById)
routers.put('/:id', updateSales)
routers.delete('/:id', deleteSales)


export default routers