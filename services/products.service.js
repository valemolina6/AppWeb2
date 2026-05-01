import { readFile, writeFile } from 'fs/promises'

const path = './data/productos.json'

export const getProducts = async () => {
  const data = await readFile(path, 'utf-8')
  return JSON.parse(data)
}

export const updateProduct = async (id, body) => {
  const products = await getProducts()

  const index = products.findIndex(p => p.id == id)
  products[index] = { ...products[index], ...body }

  await writeFile(path, JSON.stringify(products, null, 2))
  return products[index]
}