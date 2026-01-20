CREATE DATABASE ecommerce_db;
USE ecommerce_db;

CREATE TABLE Customer (
  customer_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);

CREATE TABLE Contact_Mech (
  contact_mech_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT NOT NULL,
  street_address VARCHAR(100) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  phone_number VARCHAR(20),
  email VARCHAR(100),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE
);

CREATE TABLE Product (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  color VARCHAR(30),
  size VARCHAR(10)
);

CREATE TABLE Order_Header (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  order_date DATE NOT NULL,
  customer_id INT NOT NULL,
  shipping_contact_mech_id INT NOT NULL,
  billing_contact_mech_id INT NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE,
  FOREIGN KEY (shipping_contact_mech_id) REFERENCES Contact_Mech(contact_mech_id),
  FOREIGN KEY (billing_contact_mech_id) REFERENCES Contact_Mech(contact_mech_id)
);

CREATE TABLE Order_Item (
  order_item_seq_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  status VARCHAR(20) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES Order_Header(order_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES Product(product_id)
);


INSERT INTO Customer (first_name, last_name)
VALUES 
('Mohit', 'Kumar'),
('Virat', 'Kohli');


INSERT INTO Contact_Mech (customer_id, street_address, city, state, postal_code, phone_number, email)
VALUES
(1, 'Amrapali', 'Rau', 'MP', '12345', '650253-0000', 'mohitkumar120904@gmail.com'),
(1, 'Pithampur', 'Indore', 'MP', '98765', '408996-1010', 'mohitkumar310708@gmail.com'),
(2, 'Bhopal', 'Bhopal', 'MP', '54321', '212736-3100', 'virat@example.com');


INSERT INTO Product (product_name, color, size)
VALUES
('T-Shirt', 'Red', 'M'),
('Jeans', 'Blue', '32'),
('Sneakers', 'White', '9'),
('Jacket', 'Black', 'L'),
('Hat', 'Green', 'One Size');


UPDATE Customer 
SET first_name = 'John', last_name = 'Doe' 
WHERE customer_id = 1;
UPDATE Customer 
SET first_name = 'Jane', last_name = 'Smith' 
WHERE customer_id = 2;

UPDATE Contact_Mech
SET street_address = '1600 Amphitheatre Parkway', 
    city = 'Mountain View', 
    state = 'CA', 
    postal_code = '94043', 
    phone_number = '(650) 253-0000', 
    email = 'john.doe@example.com'
WHERE customer_id = 1 AND city = 'Rau';

UPDATE Contact_Mech
SET street_address = '1 Infinite Loop', 
    city = 'Cupertino', 
    state = 'CA', 
    postal_code = '95014', 
    phone_number = '(408) 996-1010', 
    email = 'john.doe@work.com'
WHERE customer_id = 1 AND city = 'Indore';

UPDATE Contact_Mech
SET street_address = '350 Fifth Avenue', 
    city = 'New York', 
    state = 'NY', 
    postal_code = '10118', 
    phone_number = '(212) 736-3100', 
    email = 'jane.smith@example.com'
WHERE customer_id = 2;