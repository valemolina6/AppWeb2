import { Router } from 'express'
import { createSale, deleteSale } from '../services/sales.service.js'

const router = Router()

/* POST */
router.post('/', async (req, res) => {
  const sale = await createSale(req.body)
  res.json(sale)
})

/* DELETE */
router.delete('/:id', async (req, res) => {
  const result = await deleteSale(req.params.id)
  res.json(result)
})

export default router