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
exports.getUserProfileInformation = exports.login = exports.emailAlreadyExists = exports.nameAlreadyExists = exports.registerConsumer = exports.registerFarmer = void 0;
const consumer_1 = __importDefault(require("../models/consumer"));
const farmer_1 = __importDefault(require("../models/farmer"));
const http_status_codes_1 = require("http-status-codes");
const errors_1 = require("../errors");
const authentication_1 = require("../middleware/authentication");
const registerFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { locationCoordinates } = req.body;
    const parsedLocationCoordinates = JSON.parse(locationCoordinates);
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const imageUrl = req.file.path;
    const farmer = (yield farmer_1.default.create(Object.assign(Object.assign({}, req.body), { image: imageUrl, locationCoordinates: parsedLocationCoordinates })));
    if (!farmer) {
        throw new Error('Farmer creation failed');
    }
    const token = farmer.createJWT();
    const farmerDetails = farmer.getFarmerDetails();
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        farmer: farmerDetails,
        token,
    });
});
exports.registerFarmer = registerFarmer;
const registerConsumer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { locationCoordinates } = req.body;
    const parsedLocationCoordinates = JSON.parse(locationCoordinates);
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const imageUrl = req.file.path;
    const consumer = (yield consumer_1.default.create(Object.assign(Object.assign({}, req.body), { image: imageUrl, locationCoordinates: parsedLocationCoordinates })));
    const token = consumer.createJWT();
    const consumerDetails = consumer.getConsumerDetails();
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        consumer: consumerDetails,
        token,
    });
});
exports.registerConsumer = registerConsumer;
const emailAlreadyExists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const farmer = (yield farmer_1.default.findOne({ email }));
    const consumer = (yield consumer_1.default.findOne({ email }));
    return res
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ emailExists: farmer || consumer ? true : false });
});
exports.emailAlreadyExists = emailAlreadyExists;
const nameAlreadyExists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const farmer = (yield farmer_1.default.findOne({ name }));
    const consumer = (yield consumer_1.default.findOne({ name }));
    return res
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ nameExists: farmer || consumer ? true : false });
});
exports.nameAlreadyExists = nameAlreadyExists;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new errors_1.BadRequestError('Please provide email and password');
    }
    const farmer = (yield farmer_1.default.findOne({ email }));
    const consumer = (yield consumer_1.default.findOne({ email }));
    if (!consumer && !farmer) {
        throw new errors_1.UnauthenticatedError('User is not registered');
    }
    const isPasswordCorrect = farmer
        ? yield farmer.comparePasswords(password)
        : yield (consumer === null || consumer === void 0 ? void 0 : consumer.comparePasswords(password));
    if (!isPasswordCorrect) {
        throw new errors_1.UnauthenticatedError('Invalid password');
    }
    let token = farmer ? farmer.createJWT() : consumer === null || consumer === void 0 ? void 0 : consumer.createJWT();
    let details = farmer
        ? farmer.getFarmerDetails()
        : consumer === null || consumer === void 0 ? void 0 : consumer.getConsumerDetails();
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        UserDetail: details,
        token,
        role: farmer ? 'Farmer' : 'Consumer',
    });
});
exports.login = login;
const getUserProfileInformation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, role, name } = req.user;
    let userDetail;
    if (role === authentication_1.Role.Farmer) {
        userDetail = yield farmer_1.default.find({ _id: userID }).select('locationCoordinates farmerRating _id image name description mobileNo location comments');
    }
    else {
        userDetail = yield consumer_1.default.find({ _id: userID }).select('locationCoordinates name mobileNo location image following');
    }
    const user = {
        userDetail,
        userID,
        role,
    };
    res.status(http_status_codes_1.StatusCodes.OK).json({ user });
});
exports.getUserProfileInformation = getUserProfileInformation;
//# sourceMappingURL=auth.js.map