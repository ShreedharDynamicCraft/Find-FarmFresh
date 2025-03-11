"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const comments_1 = require("../controllers/comments");
router.get('/farmer/:farmerID/count', comments_1.getNoOfCommentsOfFarmer);
router.get('/farmer/:farmerID', comments_1.getCommentsOfFarmer);
router.get('/product/:productID/count', comments_1.getNoOfCommentsOfProduct);
router.get('/product/:productID', comments_1.getCommentsOfProduct);
exports.default = router;
//# sourceMappingURL=comments.js.map