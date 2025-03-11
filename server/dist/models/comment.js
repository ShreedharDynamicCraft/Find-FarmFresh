"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CommentSchema = new mongoose_1.default.Schema({
    userID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Consumer',
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0.0,
        max: 5.0,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    productID: {
        // It can be null
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Product',
    },
    farmerID: {
        // It can be null
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Farmer',
    },
});
exports.default = mongoose_1.default.model('Comment', CommentSchema);
//# sourceMappingURL=comment.js.map