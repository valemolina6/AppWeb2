# TP2 Express - App Web

API desarrollada con Express.

# Ejecutar proyecto

npm install  
npm run dev  

Servidor:
localhost:5555

---

# ENDPOINTS

# USUARIOS

GET localhost:5555/users  
Devuelve todos los usuarios

GET localhost:5555/users/:id
Devuelve los datos del usuario con el id 1

POST localhost:5555/users  
Crea un usuario

Ejemplo body:
{
  "nombre": "prueba3",
  "apellido": "prueba3",
  "email": "prueba3@gmail.com",
  "contraseña": "12344",
  "activo": true
}

---

# PRODUCTOS

GET localhost:5555/products  
Devuelve todos los productos

PUT localhost:5555/products/:id  
Actualiza un producto

Ejemplo:
localhost:5555/products/1

Body:
{
  "precio": 8888
}

---

# VENTAS

POST localhost:5555/sales  
Crea una venta



DELETE localhost:5555/sales/:id  
Elimina una venta

Ejemplo:
DELETE localhost:5555/sales/1
