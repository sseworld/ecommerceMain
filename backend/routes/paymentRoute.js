const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").post(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;
