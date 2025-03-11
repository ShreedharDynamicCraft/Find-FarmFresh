"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const products_1 = require("../controllers/products");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const authorizationFarmer_1 = __importDefault(require("../middleware/authorizationFarmer"));
const cloudinary_1 = __importDefault(require("../db/cloudinary"));
router.route('/').get(products_1.getAllProducts).post(authentication_1.default, authorizationFarmer_1.default, cloudinary_1.default.single('images'), 
// upload.array('productImage', 3),
products_1.createProduct);
router.route('/topRatedProducts').get(products_1.getTopRatedProducts);
router.route('/discountedProducts').get(products_1.getDiscountedProducts);
router.route('/lastThirtyDayProducts/:farmerID').get(products_1.getProductsLast30Days);
router
    .route('/:productID')
    .get(products_1.getProductDetail)
    .delete(authentication_1.default, authorizationFarmer_1.default, products_1.deleteProduct)
    .patch(authentication_1.default, cloudinary_1.default.single('images'), products_1.updateProduct);
router.route('/category/:parentCategory').get(products_1.getProductsOfCategory);
router.route('/orderDetail/:productID').get(products_1.getProductDetailForOrder);
exports.default = router;
//# sourceMappingURL=products.js.map