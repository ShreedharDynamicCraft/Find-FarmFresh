"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const cloudinary_1 = __importDefault(require("../db/cloudinary"));
const router = (0, express_1.Router)();
router.route('/login').post(auth_1.login);
router.route('/userExists/email/:email').get(auth_1.emailAlreadyExists);
router.route('/userExists/name/:name').get(auth_1.nameAlreadyExists);
router
    .route('/register/farmer')
    .post(cloudinary_1.default.single('image'), auth_1.registerFarmer);
router
    .route('/register/consumer')
    .post(cloudinary_1.default.single('image'), auth_1.registerConsumer);
router.route('/').get(authentication_1.default, auth_1.getUserProfileInformation);
exports.default = router;
//# sourceMappingURL=auth.js.map