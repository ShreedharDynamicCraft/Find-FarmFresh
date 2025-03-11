"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderToReview = exports.getEarningsForLast30Days = exports.deleteOrder = exports.updateOrder = exports.addOrder = exports.getOrders = void 0;
const order_1 = __importDefault(require("../models/order"));
const http_status_codes_1 = require("http-status-codes");
const authentication_1 = require("../middleware/authentication");
const unauthorized_1 = __importDefault(require("../errors/unauthorized"));
const moment_1 = __importDefault(require("moment"));
const getFormattedDate_1 = require("../utils/getFormattedDate");
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, role } = req.user;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;
    const skip = (page - 1) * limit;
    let query;
    if (role === authentication_1.Role.Farmer) {
        query = order_1.default.find({ farmerID: userID }).sort({ orderDate: -1 });
    }
    else {
        query = order_1.default.find({ consumerID: userID }).sort({ orderDate: -1 });
    }
    const orders = yield query.skip(skip).limit(limit);
    res.status(http_status_codes_1.StatusCodes.OK).json({ orders });
});
exports.getOrders = getOrders;
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.user;
    const order = yield order_1.default.create(Object.assign(Object.assign({}, req.body), { consumerID: userID }));
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ order });
});
exports.addOrder = addOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, role } = req.user;
    const { orderID } = req.params;
    let updateFields = {};
    if (req.body.deliveryStatus) {
        updateFields.deliveryStatus = req.body.deliveryStatus;
    }
    if (req.body.paymentStatus && role === authentication_1.Role.Farmer) {
        updateFields.paymentStatus = req.body.paymentStatus;
    }
    if (Object.prototype.hasOwnProperty.call(req.body, 'notifyConsumer') &&
        role === authentication_1.Role.Consumer) {
        updateFields.notifyConsumer = req.body.notifyConsumer;
    }
    let updatedOrder;
    if (role === authentication_1.Role.Farmer) {
        updatedOrder = yield order_1.default.findOneAndUpdate({ _id: orderID, farmerID: userID }, {
            $set: updateFields,
        }, { new: true, runValidators: true });
    }
    if (role === authentication_1.Role.Consumer && updateFields !== null) {
        updatedOrder = yield order_1.default.findOneAndUpdate({ _id: orderID, consumerID: userID }, {
            $set: updateFields,
        }, { new: true, runValidators: true });
    }
    if (!updatedOrder) {
        throw new unauthorized_1.default('You cannot make those changes');
    }
    res.status(http_status_codes_1.StatusCodes.OK).json({ updatedOrder });
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderID } = req.params;
    const order = yield order_1.default.findOne({
        _id: orderID,
        farmerID: req.user.userID,
    });
    const thirtyDaysAgo = (0, moment_1.default)().subtract(30, 'days').toDate();
    if (order.orderDate > thirtyDaysAgo) {
        return res
            .status(http_status_codes_1.StatusCodes.FORBIDDEN)
            .json({ message: 'Cannot delete an order from the last 30 days' });
    }
    yield order_1.default.findOneAndDelete({
        _id: orderID,
        farmerID: req.user.userID,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ order });
});
exports.deleteOrder = deleteOrder;
const getEarningsForLast30Days = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dateArray = [];
    const totalAmountArray = [];
    const today = new Date();
    const farmerID = req.user.userID;
    // Loop for the last 30 days
    for (let i = 0; i < 30; i++) {
        // Create start and end dates for each day
        const currentDate = new Date();
        currentDate.setDate(today.getDate() - 30 + i + 1);
        currentDate.setHours(0, 0, 0, 0);
        const startDate = new Date(currentDate);
        const endDate = new Date(currentDate);
        endDate.setHours(23, 59, 59, 999);
        // Query for orders on that day
        const query = {
            orderDate: {
                $gte: startDate,
                $lt: endDate,
            },
            farmerID,
        };
        const results = yield order_1.default.find(query);
        const totalAmount = results.reduce((sum, order) => sum + order.totalPrice, 0);
        // Push date and total amount into array
        dateArray.push((0, getFormattedDate_1.getFormattedDateWithoutYear)(currentDate));
        totalAmountArray.push(totalAmount);
    }
    res.status(http_status_codes_1.StatusCodes.OK).json({ data: [dateArray, totalAmountArray] });
});
exports.getEarningsForLast30Days = getEarningsForLast30Days;
const getOrderToReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.user;
    const orders = yield order_1.default.find({
        consumerID: userID,
        notifyConsumer: true,
        deliveryStatus: 'Delivered',
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ orders });
});
exports.getOrderToReview = getOrderToReview;
//# sourceMappingURL=orders.js.map