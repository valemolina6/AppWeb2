import { Router } from 'express'
import { getProducts, updateProduct } from '../services/products.service.js'

const router = Router()

/* GET */
router.get('/', async (req, res) => {
  const products = await getProducts()
  res.json(products)
})

/* PUT */
router.put('/:id', async (req, res) => {
  try {
  
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Faltan datos para actualizar' })
    }


    const allowedFields = ['nombre', 'desc', 'precio', 'imagen', 'stock']
    const bodyKeys = Object.keys(req.body)


    const isValidOperation = bodyKeys.every(key => allowedFields.includes(key))

    if (!isValidOperation) {
      return res.status(400).json({ 
        error: 'Estás intentando ingresar datos no válidos. Solo se permite actualizar: nombre, desc, precio, imagen y stock.' 
      })
    }


    const updated = await updateProduct(req.params.id, req.body)
    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router