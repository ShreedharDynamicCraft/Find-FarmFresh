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
exports.addCommentsToFarmer = exports.updateFarmer = exports.getProductsOfFarmer = exports.getFarmer = void 0;
const farmer_1 = __importDefault(require("../models/farmer"));
const product_1 = __importDefault(require("../models/product"));
const not_found_1 = __importDefault(require("../errors/not-found"));
const comment_1 = __importDefault(require("../models/comment"));
const http_status_codes_1 = require("http-status-codes");
const getFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { farmerID } = req.params;
    const farmer = yield farmer_1.default.find({ _id: farmerID }).select('locationCoordinates farmerRating _id image name description mobileNo location comments');
    res.status(http_status_codes_1.StatusCodes.OK).json({ farmer });
});
exports.getFarmer = getFarmer;
const getProductsOfFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { farmerID } = req.params;
    const products = yield product_1.default.find({ farmerID })
        .sort({ createdAt: -1 })
        .exec();
    res.status(http_status_codes_1.StatusCodes.OK).json({ products, nbHits: products.length });
});
exports.getProductsOfFarmer = getProductsOfFarmer;
const updateFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.user;
    const { locationCoordinates } = req.body;
    const parsedLocationCoordinates = JSON.parse(locationCoordinates);
    const updateFields = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (req.body.mobileNo && { mobileNo: req.body.mobileNo })), (req.file && { image: req.file.path })), (req.body.description && { description: req.body.description })), (req.body.location && { location: req.body.location })), (req.body.locationCoordinates && {
        locationCoordinates: {
            latitude: {
                coordinate: parsedLocationCoordinates.latitude.coordinate,
                direction: parsedLocationCoordinates.latitude.direction,
            },
            longitude: {
                coordinate: parsedLocationCoordinates.longitude.coordinate,
                direction: parsedLocationCoordinates.longitude.direction,
            },
        },
    }));
    const updateQuery = Object.keys(updateFields).length > 0 ? { $set: updateFields } : {};
    const updatedFarmer = yield farmer_1.default.findOneAndUpdate({ _id: userID }, Object.assign({}, updateQuery), {
        new: true,
        runValidators: true,
    }).select('_id locationCoordinates name location farmerRating image email comments mobileNo description');
    if (!updatedFarmer) {
        throw new not_found_1.default('Farmer not found');
    }
    res.json({ farmer: updatedFarmer });
});
exports.updateFarmer = updateFarmer;
const addCommentsToFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const { userID, role, name } = req.user;
    const { farmerID } = req.params;
    const farmer = yield farmer_1.default.findOne({ _id: farmerID });
    let fiveNew = (_b = (_a = farmer === null || farmer === void 0 ? void 0 : farmer.farmerRating) === null || _a === void 0 ? void 0 : _a.voteCount) === null || _b === void 0 ? void 0 : _b.five;
    let fourNew = (_d = (_c = farmer === null || farmer === void 0 ? void 0 : farmer.farmerRating) === null || _c === void 0 ? void 0 : _c.voteCount) === null || _d === void 0 ? void 0 : _d.four;
    let threeNew = (_f = (_e = farmer === null || farmer === void 0 ? void 0 : farmer.farmerRating) === null || _e === void 0 ? void 0 : _e.voteCount) === null || _f === void 0 ? void 0 : _f.three;
    let twoNew = (_h = (_g = farmer === null || farmer === void 0 ? void 0 : farmer.farmerRating) === null || _g === void 0 ? void 0 : _g.voteCount) === null || _h === void 0 ? void 0 : _h.two;
    let oneNew = (_k = (_j = farmer === null || farmer === void 0 ? void 0 : farmer.farmerRating) === null || _j === void 0 ? void 0 : _j.voteCount) === null || _k === void 0 ? void 0 : _k.one;
    switch (req.body.comment.rating) {
        case 5:
            fiveNew++;
            break;
        case 4:
            fourNew++;
            break;
        case 3:
            threeNew++;
            break;
        case 2:
            twoNew++;
            break;
        case 5:
            oneNew++;
            break;
    }
    const totalRating = (fiveNew * 5 + fourNew * 4 + threeNew * 3 + twoNew * 2 + oneNew * 1) /
        (fiveNew + fourNew + threeNew + twoNew + oneNew);
    const farmerRating = {
        rating: Math.round(totalRating * 100) / 100,
        voteCount: {
            five: fiveNew,
            four: fourNew,
            three: threeNew,
            two: twoNew,
            one: oneNew,
        },
    };
    const newComment = req.body.comment
        ? {
            userID: userID,
            username: name,
            rating: req.body.comment.rating,
            title: req.body.comment.title,
            description: req.body.comment.description,
        }
        : undefined;
    let updatedFarmer;
    if (newComment) {
        updatedFarmer = yield farmer_1.default.findOneAndUpdate({ _id: farmerID }, {
            $push: { comments: { $each: [newComment], $position: 0 } },
            $set: { farmerRating: farmerRating },
        }, { new: true, runValidators: true }).select('_id locationCoordinates name location farmerRating image email comments mobileNo description');
        if (!updatedFarmer)
            return res
                .status(http_status_codes_1.StatusCodes.NOT_FOUND)
                .json({ error: 'Farmer not found' });
        if (updatedFarmer.comments.length > 6) {
            const leastRecentComment = updatedFarmer
                .comments[6];
            if (!leastRecentComment) {
                return res
                    .status(http_status_codes_1.StatusCodes.NOT_FOUND)
                    .json({ error: 'Comment not found' });
            }
            updatedFarmer = yield farmer_1.default.findByIdAndUpdate({ _id: farmerID }, {
                $pull: {
                    comments: { _id: leastRecentComment._id },
                },
            }, { new: true, runValidators: true }).select('_id locationCoordinates name location farmerRating image email comments mobileNo description');
            const comment = yield comment_1.default.create({
                userID: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.userID,
                rating: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.rating,
                description: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.description,
                title: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.title,
                createdAt: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.createdAt,
                username: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.username,
                farmerID,
            });
            return res.status(http_status_codes_1.StatusCodes.CREATED).json({ comment });
        }
    }
    if (!updateFarmer) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ error: 'Farmer not found' });
    }
    res.json({ farmer: updatedFarmer });
});
exports.addCommentsToFarmer = addCommentsToFarmer;
//# sourceMappingURL=farmers.js.map