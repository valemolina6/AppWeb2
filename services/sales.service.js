import { readFile, writeFile } from 'fs/promises'

const path = './data/ventas.json'

const getSales = async () => {
  const data = await readFile(path, 'utf-8')
  return JSON.parse(data)
}

export const createSale = async (sale) => {
  const sales = await getSales()
  const newSale = { id: sales.length + 1, ...sale }

  sales.push(newSale)
  await writeFile(path, JSON.stringify(sales, null, 2))

  return newSale
}

/* DELETE */
export const deleteSale = async (id) => {
  let sales = await getSales()

  const exists = sales.find(s => s.id == id)
  if (!exists) return { error: "No existe la venta" }

  sales = sales.filter(s => s.id != id)

  await writeFile(path, JSON.stringify(sales, null, 2))

  return { message: "Venta eliminada correctamente" }
}