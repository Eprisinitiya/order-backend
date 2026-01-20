const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/orders", orderController.createOrder);
router.get("/orders/:orderId", orderController.getOrder);
router.put("/orders/:orderId", orderController.updateOrder);
router.delete("/orders/:orderId", orderController.deleteOrder);

router.post("/orders/:orderId/items", orderController.addOrderItem);
router.put("/orders/:orderId/items/:itemId", orderController.updateOrderItem);
router.delete("/orders/:orderId/items/:itemId", orderController.deleteOrderItem);

module.exports = router;