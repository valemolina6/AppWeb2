import { Router } from 'express'
import { getUsers, createUser } from '../services/users.service.js'

const router = Router()

/* GET */
router.get('/', async (req, res) => {
  const users = await getUsers()
  res.json(users)
})

/* POST */
router.post('/', async (req, res) => {
  const newUser = await createUser(req.body)
  res.json(newUser)
})

export default router