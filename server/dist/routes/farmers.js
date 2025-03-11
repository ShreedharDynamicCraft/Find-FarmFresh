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
const farmers_1 = require("../controllers/farmers");
const cloudinary_1 = __importDefault(require("../db/cloudinary"));
router.route('/:farmerID/products').get(farmers_1.getProductsOfFarmer);
router
    .route('/:farmerID/comments')
    .patch(authentication_1.default, authorizationConsumer_1.default, farmers_1.addCommentsToFarmer);
router.route('/:farmerID').get(farmers_1.getFarmer);
router
    .route('/')
    .patch(authentication_1.default, authorizationFarmer_1.default, cloudinary_1.default.single('image'), farmers_1.updateFarmer);
exports.default = router;
//# sourceMappingURL=farmers.js.map