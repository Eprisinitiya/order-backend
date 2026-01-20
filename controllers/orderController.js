const OrderModel = require("../models/orderModel");

exports.createOrder = (req, res) => {
  const { order_date, customer_id, shipping_contact_mech_id, billing_contact_mech_id, order_items } = req.body;

  if (!order_date || !customer_id || !shipping_contact_mech_id || !billing_contact_mech_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const orderData = {
    order_date,
    customer_id,
    shipping_contact_mech_id,
    billing_contact_mech_id
  };

  OrderModel.createOrderHeader(orderData, (err, result) => {
    if (err) return res.status(500).json(err);

    const orderId = result.insertId;

    order_items.forEach(item => {
      OrderModel.addOrderItem(orderId, item, () => {});
    });

    res.status(201).json({
      message: "Order Created",
      order_id: orderId
    });
  });
};

exports.getOrder = (req, res) => {
  const orderId = req.params.orderId;

  OrderModel.getOrderDetails(orderId, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(results);
  });
};

exports.updateOrder = (req, res) => {
  const orderId = req.params.orderId;
  const { shipping_contact_mech_id, billing_contact_mech_id } = req.body;

  OrderModel.updateOrderHeader(orderId, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order updated successfully" });
  });
};

exports.deleteOrder = (req, res) => {
  const orderId = req.params.orderId;

  OrderModel.deleteOrder(orderId, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order deleted successfully" });
  });
};

exports.addOrderItem = (req, res) => {
  const orderId = req.params.orderId;
  const item = req.body;

  OrderModel.addOrderItem(orderId, item, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: "Item added to order" });
  });
};

exports.updateOrderItem = (req, res) => {
  const orderId = req.params.orderId;
  const itemId = req.params.itemId;

  OrderModel.updateOrderItem(orderId, itemId, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order item updated" });
  });
};

exports.deleteOrderItem = (req, res) => {
  const orderId = req.params.orderId;
  const itemId = req.params.itemId;

  OrderModel.deleteOrderItem(orderId, itemId, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order item deleted" });
  });
};
