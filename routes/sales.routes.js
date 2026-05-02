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
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: 'Se requiere un ID válido' })
    }
    
    const result = await deleteSale(req.params.id)
    res.json(result)
  } catch (error) {

    res.status(400).json({ error: 'No se pudo eliminar el registro. Puede que existan datos relacionados: ' + error.message })
  }
})

export default router