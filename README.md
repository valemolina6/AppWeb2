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

GET /users  
Devuelve todos los usuarios
Ejemplo: localhost:5555/users  

GET /users/:id
Devuelve los datos del usuario por id
Ejemplo: localhost:5555/users/1

POST /users   
Crea un usuario
Ejemplo: localhost:5555/users 

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

GET /products  
Devuelve todos los productos
Ejemplo: localhost:5555/products 

PUT /products/:id  
Actualiza un producto

Ejemplo:
localhost:5555/products/1

Body:
{
  "precio": 8888
}

---

# VENTAS

POST /sales  
Crea una venta
Ejemplo: localhost:5555/sales

Body:
{
  "id": 3,
  "precio": 10500
}

DELETE /sales/:id  
Elimina una venta

Ejemplo:
DELETE localhost:5555/sales/1
