const db = require("../config/db");

const OrderModel = {

  createOrderHeader: (order, callback) => {
    const sql = `
      INSERT INTO Order_Header 
      (order_date, customer_id, shipping_contact_mech_id, billing_contact_mech_id)
      VALUES (?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        order.order_date,
        order.customer_id,
        order.shipping_contact_mech_id,
        order.billing_contact_mech_id
      ],
      callback
    );
  },

  addOrderItem: (orderId, item, callback) => {
    const sql = `
      INSERT INTO Order_Item 
      (order_id, product_id, quantity, status)
      VALUES (?, ?, ?, ?)
    `;

    db.query(
      sql,
      [orderId, item.product_id, item.quantity, item.status],
      callback
    );
  },

  getOrderDetails: (orderId, callback) => {
    const sql = `
      SELECT 
        oh.order_id,
        oh.order_date,
        c.customer_id,
        c.first_name,
        c.last_name,
        oi.order_item_seq_id,
        oi.product_id,
        p.product_name,
        oi.quantity,
        oi.status
      FROM Order_Header oh
      JOIN Customer c ON oh.customer_id = c.customer_id
      LEFT JOIN Order_Item oi ON oh.order_id = oi.order_id
      LEFT JOIN Product p ON oi.product_id = p.product_id
      WHERE oh.order_id = ?;
    `;

    db.query(sql, [orderId], callback);
  },

  updateOrderHeader: (orderId, data, callback) => {
    const sql = `
      UPDATE Order_Header 
      SET shipping_contact_mech_id = ?, billing_contact_mech_id = ?
      WHERE order_id = ?
    `;

    db.query(
      sql,
      [data.shipping_contact_mech_id, data.billing_contact_mech_id, orderId],
      callback
    );
  },

  deleteOrder: (orderId, callback) => {
    const sql = "DELETE FROM Order_Header WHERE order_id = ?";
    db.query(sql, [orderId], callback);
  },

  updateOrderItem: (orderId, itemId, data, callback) => {
    const sql = `
      UPDATE Order_Item 
      SET quantity = ?, status = ?
      WHERE order_id = ? AND order_item_seq_id = ?
    `;

    db.query(
      sql,
      [data.quantity, data.status, orderId, itemId],
      callback
    );
  },

  deleteOrderItem: (orderId, itemId, callback) => {
    const sql = `
      DELETE FROM Order_Item 
      WHERE order_id = ? AND order_item_seq_id = ?
    `;

    db.query(sql, [orderId, itemId], callback);
  }
};

module.exports = OrderModel;
