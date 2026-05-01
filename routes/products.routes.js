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
  const updated = await updateProduct(req.params.id, req.body)
  res.json(updated)
})

export default router