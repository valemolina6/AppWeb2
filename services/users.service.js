import { readFile, writeFile } from 'fs/promises'

const path = './data/usuarios.json'

export const getUsers = async () => {
  const data = await readFile(path, 'utf-8')
  return JSON.parse(data)
}

export const createUser = async (user) => {
  const users = await getUsers()
  const newUser = { id: users.length + 1, ...user }

  users.push(newUser)
  await writeFile(path, JSON.stringify(users, null, 2))

  return newUser
}