"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    farmerID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true,
    },
    farmerName: {
        type: String,
        required: true,
    },
    consumerID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Consumer',
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    products: [
        {
            _id: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                required: false,
            },
            productID: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            productPrice: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    deliveryStatus: {
        type: String,
        enum: ['Waiting', 'Transported', 'Cancelled', 'Delivered'],
        default: 'Waiting',
    },
    paymentStatus: {
        type: String,
        enum: ['Paid', 'UnPaid'],
        default: 'UnPaid',
    },
    notifyConsumer: {
        type: Boolean,
        default: true,
    },
});
exports.default = mongoose_1.default.model('Order', OrderSchema);
//# sourceMappingURL=order.js.map