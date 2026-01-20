# 🛒 Order Management REST API (Node.js + MySQL)

This project is a **RESTful Order Management System** built using **Node.js, Express, and MySQL**. It supports full CRUD operations for orders and order items, following proper REST principles.

---

## 🚀 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Architecture:** MVC (Routes → Controllers → Models)
* **Environment Variables:** dotenv
* **Testing Tool:** Postman

---

## 🌱 Sample Data (for testing)

```sql
INSERT INTO Customer (first_name, last_name)
VALUES ('John', 'Doe'), ('Jane', 'Smith');

INSERT INTO Contact_Mech (customer_id, street_address, city, state, postal_code, phone_number, email)
VALUES
(1, '1600 Amphitheatre Parkway', 'Mountain View', 'CA', '94043', '(650) 253-0000', 'john.doe@example.com'),
(1, '1 Infinite Loop', 'Cupertino', 'CA', '95014', '(408) 996-1010', 'john.doe@work.com'),
(2, '350 Fifth Avenue', 'New York', 'NY', '10118', '(212) 736-3100', 'jane.smith@example.com');

INSERT INTO Product (product_name, color, size)
VALUES
('T-Shirt', 'Red', 'M'),
('Jeans', 'Blue', '32'),
('Sneakers', 'White', '9'),
('Jacket', 'Black', 'L'),
('Hat', 'Green', 'One Size');
```

---


## 🧪 REST API Endpoints

| Method | Endpoint                               | Description        |
| ------ | -------------------------------------- | ------------------ |
| POST   | `/api/orders`                          | Create a new order |
| GET    | `/api/orders/{orderId}`                | Get order details  |
| PUT    | `/api/orders/{orderId}`                | Update order       |
| DELETE | `/api/orders/{orderId}`                | Delete order       |
| POST   | `/api/orders/{orderId}/items`          | Add order item     |
| PUT    | `/api/orders/{orderId}/items/{itemId}` | Update order item  |
| DELETE | `/api/orders/{orderId}/items/{itemId}` | Delete order item  |

---

## ▶️ Running the Backend

```sh
cd order-backend
npm install
npx nodemon server.js
```

Server runs at:

```
http://localhost:5000
```

---

## 👨‍💻 Developed By

**Mohit Kumar** (Eprisinitiya)
