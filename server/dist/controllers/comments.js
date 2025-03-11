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
exports.getNoOfCommentsOfProduct = exports.getCommentsOfProduct = exports.getNoOfCommentsOfFarmer = exports.getCommentsOfFarmer = void 0;
const comment_1 = __importDefault(require("../models/comment"));
const http_status_codes_1 = require("http-status-codes");
const getCommentsOfFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { farmerID } = req.params;
    const limit = 3;
    const page = Number(req.query.page) - 2 || 1;
    const skip = (page - 1) * limit;
    let result = comment_1.default.find({ farmerID })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
    const comments = yield result.exec();
    res.status(http_status_codes_1.StatusCodes.OK).json({ comments });
});
exports.getCommentsOfFarmer = getCommentsOfFarmer;
const getNoOfCommentsOfFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { farmerID } = req.params;
    let result = comment_1.default.find({ farmerID });
    const noOfComments = (yield result.exec()).length;
    res.status(http_status_codes_1.StatusCodes.OK).json({ count: noOfComments });
});
exports.getNoOfCommentsOfFarmer = getNoOfCommentsOfFarmer;
const getCommentsOfProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productID } = req.params;
    const limit = 3;
    const page = Number(req.query.page) - 2 || 1;
    const skip = (page - 1) * limit;
    let result = comment_1.default.find({ productID })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
    const comments = yield result.exec();
    res.status(http_status_codes_1.StatusCodes.OK).json({ comments });
});
exports.getCommentsOfProduct = getCommentsOfProduct;
const getNoOfCommentsOfProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productID } = req.params;
    let result = comment_1.default.find({ productID });
    const noOfComments = (yield result.exec()).length;
    res.status(http_status_codes_1.StatusCodes.OK).json({ count: noOfComments });
});
exports.getNoOfCommentsOfProduct = getNoOfCommentsOfProduct;
//# sourceMappingURL=comments.js.map