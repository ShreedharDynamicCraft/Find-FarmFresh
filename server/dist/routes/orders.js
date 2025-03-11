"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const orders_1 = require("../controllers/orders");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const authorizationConsumer_1 = __importDefault(require("../middleware/authorizationConsumer"));
const authorizationFarmer_1 = __importDefault(require("../middleware/authorizationFarmer"));
router
    .route('/')
    .get(authentication_1.default, orders_1.getOrders)
    .post(authentication_1.default, authorizationConsumer_1.default, orders_1.addOrder);
router
    .route('/reviewOrders')
    .get(authentication_1.default, authorizationConsumer_1.default, orders_1.getOrderToReview);
router
    .route('/getEarningsForLast30Days')
    .get(authentication_1.default, authorizationFarmer_1.default, orders_1.getEarningsForLast30Days);
router
    .route('/:orderID')
    .patch(authentication_1.default, orders_1.updateOrder)
    .delete(authentication_1.default, authorizationFarmer_1.default, orders_1.deleteOrder);
exports.default = router;
//# sourceMappingURL=orders.js.map