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
exports.getShoppingCart = exports.unFollowFarmer = exports.followFarmer = exports.updateConsumer = exports.getConsumer = void 0;
const consumer_1 = __importDefault(require("../models/consumer"));
const http_status_codes_1 = require("http-status-codes");
const not_found_1 = __importDefault(require("../errors/not-found"));
const getConsumer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { consumerID } = req.params;
    const consumer = yield consumer_1.default.find({ _id: consumerID }).select('locationCoordinates name mobileNo location');
    res.status(http_status_codes_1.StatusCodes.OK).json({ consumer });
});
exports.getConsumer = getConsumer;
const updateConsumer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.user;
    const { locationCoordinates } = req.body;
    let parsedLocationCoordinates;
    if (locationCoordinates) {
        parsedLocationCoordinates = JSON.parse(locationCoordinates);
    }
    let updateFields = {};
    if (req.file)
        updateFields.image = req.file.path;
    if (req.body.location)
        updateFields.location = req.body.location;
    if (req.body.mobileNo)
        updateFields.mobileNo = req.body.mobileNo;
    if (req.body.locationCoordinates) {
        updateFields.locationCoordinates = {
            latitude: {
                coordinate: parsedLocationCoordinates.latitude.coordinate,
                direction: parsedLocationCoordinates.latitude.direction,
            },
            longitude: {
                coordinate: parsedLocationCoordinates.longitude.coordinate,
                direction: parsedLocationCoordinates.longitude.direction,
            },
        };
    }
    if (req.body.cart) {
        updateFields.cart = req.body.cart;
    }
    const consumer = yield consumer_1.default.findOneAndUpdate({ _id: userID }, updateFields, {
        new: true,
        runValidators: true,
    }).select('name image location mobileNo locationCoordinates following cart _id');
    res.status(http_status_codes_1.StatusCodes.OK).json({ consumer });
});
exports.updateConsumer = updateConsumer;
const followFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.user;
    const { farmer } = req.body;
    const updatedConsumer = yield consumer_1.default.findByIdAndUpdate({ _id: userID }, { $addToSet: { following: farmer } }, { new: true, runValidators: true }).select('locationCoordinates name mobileNo location following cart');
    if (!updateConsumer) {
        throw new not_found_1.default('Consumer not found');
    }
    res.status(http_status_codes_1.StatusCodes.OK).json({ consumer: updatedConsumer });
});
exports.followFarmer = followFarmer;
const getShoppingCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.user;
    const shoppingcart = yield consumer_1.default.find({ _id: userID }).select('cart');
    res.status(http_status_codes_1.StatusCodes.OK).json({ cart: shoppingcart });
});
exports.getShoppingCart = getShoppingCart;
const unFollowFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.user;
    const updatedConsumer = yield consumer_1.default.findByIdAndUpdate({ _id: userID }, { $pull: { following: req.body.farmer } }, { new: true, runValidators: true }).select('locationCoordinates name mobileNo location following cart');
    if (!updateConsumer) {
        throw new not_found_1.default('Consumer not found');
    }
    res.status(http_status_codes_1.StatusCodes.GONE).json({ consumer: updatedConsumer });
});
exports.unFollowFarmer = unFollowFarmer;
//# sourceMappingURL=consumers.js.map