import { Router } from 'express'
import { getUsers, createUser } from '../services/users.service.js'
import { getUsers, getUserById, createUser } from '../services/users.service.js'

const router = Router()

/* GET */
router.get('/', async (req, res) => {
  const users = await getUsers()
  res.json(users)
})

/* GET POR ID */
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

/* POST */
router.post('/', async (req, res) => {
  const newUser = await createUser(req.body)
  res.json(newUser)
})

export default router