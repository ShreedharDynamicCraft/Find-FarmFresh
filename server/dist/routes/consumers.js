"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authentication_1 = __importDefault(require("../middleware/authentication"));
const authorizationConsumer_1 = __importDefault(require("../middleware/authorizationConsumer"));
const authorizationFarmer_1 = __importDefault(require("../middleware/authorizationFarmer"));
const consumers_1 = require("../controllers/consumers");
const cloudinary_1 = __importDefault(require("../db/cloudinary"));
router
    .route('/shoppingCart')
    .get(authentication_1.default, authorizationConsumer_1.default, consumers_1.getShoppingCart);
router
    .route('/followFarmer')
    .patch(authentication_1.default, authorizationConsumer_1.default, consumers_1.followFarmer);
router
    .route('/unFollowFarmer')
    .patch(authentication_1.default, authorizationConsumer_1.default, consumers_1.unFollowFarmer);
router.route('/:consumerID').get(authentication_1.default, authorizationFarmer_1.default, consumers_1.getConsumer);
router
    .route('/')
    .patch(authentication_1.default, authorizationConsumer_1.default, cloudinary_1.default.single('image'), consumers_1.updateConsumer);
exports.default = router;
//# sourceMappingURL=consumers.js.map