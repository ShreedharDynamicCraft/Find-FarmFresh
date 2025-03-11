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
exports.getProductsLast30Days = exports.getProductDetailForOrder = exports.updateProduct = exports.deleteProduct = exports.getProductDetail = exports.getDiscountedProducts = exports.getTopRatedProducts = exports.getProductsOfCategory = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const comment_1 = __importDefault(require("../models/comment"));
const authentication_1 = require("../middleware/authentication");
const unauthorized_1 = __importDefault(require("../errors/unauthorized"));
const http_status_codes_1 = require("http-status-codes");
const not_found_1 = __importDefault(require("../errors/not-found"));
const getCategory_1 = __importDefault(require("../utils/getCategory"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, name } = req.user;
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const imageUrl = req.file.path;
    const product = yield product_1.default.create(Object.assign(Object.assign({}, req.body), { farmerID: userID, farmerName: name, images: imageUrl }));
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ product });
});
exports.createProduct = createProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find({});
    res.status(http_status_codes_1.StatusCodes.OK).json({ products, nbHits: products.length });
});
exports.getAllProducts = getAllProducts;
const getTopRatedProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryObject = { 'productRating.rating': { $gte: 4.5 }, isVisible: true };
    const topRatedProducts = yield product_1.default.find(queryObject).sort({
        createdAt: -1,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ products: topRatedProducts });
});
exports.getTopRatedProducts = getTopRatedProducts;
const getDiscountedProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const discountedProducts = yield product_1.default.find({
        hasDiscount: true,
        isVisible: true,
    }).sort({
        createdAt: -1,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ products: discountedProducts });
});
exports.getDiscountedProducts = getDiscountedProducts;
const getProductsLast30Days = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { farmerID } = req.params;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const products = yield product_1.default.find({
        farmerID: farmerID,
        isVisible: true,
        createdAt: {
            $gte: thirtyDaysAgo,
            $lt: new Date(),
        },
    });
    res.status(200).json({ products });
});
exports.getProductsLast30Days = getProductsLast30Days;
const getProductDetailForOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productID } = req.params;
    const product = yield product_1.default.findOne({ _id: productID }).select('_id title price images parentCategory category farmerID farmerName hasDiscount discountPercentage');
    res.status(http_status_codes_1.StatusCodes.OK).json({ product });
});
exports.getProductDetailForOrder = getProductDetailForOrder;
const getProductsOfCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { parentCategory } = req.params;
    parentCategory = (0, getCategory_1.default)(parentCategory);
    // // api/v1/products/category/fruits?category=Apples&rating=4
    const { category, search, rating, sortBy } = req.query;
    let queryObject = {
        parentCategory,
        isVisible: true,
    };
    if (category) {
        queryObject.category = category;
    }
    if (search) {
        queryObject.title = { $regex: search, $options: 'i' };
    }
    if (rating) {
        queryObject['productRating.rating'] = { $gte: parseFloat(rating) };
    }
    let result = product_1.default.find(queryObject).select('_id title price farmerID farmerName images parentCategory category productRating hasDiscount discountPercentage isVisible');
    const noOfTotalProducts = yield product_1.default.countDocuments(queryObject);
    if (sortBy === 'rating') {
        result = result.sort('productRating.rating');
    }
    else if (sortBy === 'lowToHigh') {
        result = result.sort('price');
    }
    else if (sortBy === 'highToLow') {
        result = result.sort('-price');
    }
    else {
        result = result.sort('createdAt');
    }
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 9;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    const products = yield result;
    res.status(http_status_codes_1.StatusCodes.OK).json({ products, nbHits: noOfTotalProducts });
});
exports.getProductsOfCategory = getProductsOfCategory;
const getProductDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productID } = req.params;
    const product = yield product_1.default.findOne({ _id: productID });
    res.status(http_status_codes_1.StatusCodes.OK).json({ product });
});
exports.getProductDetail = getProductDetail;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const { userID, name, role } = req.user;
    const { productID } = req.params;
    let updateFields = {};
    // let images = req.file ? req.file.filename : req.body.images
    if (req.file)
        updateFields.images = req.file.path;
    if (req.body.title)
        updateFields.title = req.body.title;
    if (req.body.price)
        updateFields.price = req.body.price;
    if (req.body.parentCategory)
        updateFields.parentCategory = req.body.parentCategory;
    if (req.body.category)
        updateFields.category = req.body.category;
    if (Object.prototype.hasOwnProperty.call(req.body, 'isVisible'))
        updateFields.isVisible = req.body.isVisible;
    if (req.body.delivery)
        updateFields.delivery = req.body.delivery;
    if (req.body.organic)
        updateFields.organic = req.body.organic;
    if (req.body.transaction)
        updateFields.transaction = req.body.transaction;
    if (req.body.cashOnDelivery)
        updateFields.cashOnDelivery = req.body.cashOnDelivery;
    if (req.body.returnableChoice)
        updateFields.returnableChoice = req.body.returnableChoice;
    if (req.body.onSiteShopping)
        updateFields.onSiteShopping = req.body.onSiteShopping;
    if (Object.prototype.hasOwnProperty.call(req.body, 'hasDiscount')) {
        updateFields.hasDiscount = req.body.hasDiscount;
    }
    if (req.body.discountPercentage)
        updateFields.discountPercentage = req.body.discountPercentage;
    const newComment = req.body.comment
        ? {
            userID: userID,
            username: name,
            rating: req.body.comment.rating,
            title: req.body.comment.title,
            description: req.body.comment.description,
        }
        : undefined;
    let updatedProduct;
    if (role === authentication_1.Role.Farmer) {
        updatedProduct = yield product_1.default.findOneAndUpdate({ _id: productID, farmerID: userID }, {
            $set: updateFields,
        }, { new: true, runValidators: true });
    }
    if (newComment && role === authentication_1.Role.Consumer) {
        const product = yield product_1.default.findOne({ _id: productID });
        let fiveNew = (_b = (_a = product === null || product === void 0 ? void 0 : product.productRating) === null || _a === void 0 ? void 0 : _a.voteCount) === null || _b === void 0 ? void 0 : _b.five;
        let fourNew = (_d = (_c = product === null || product === void 0 ? void 0 : product.productRating) === null || _c === void 0 ? void 0 : _c.voteCount) === null || _d === void 0 ? void 0 : _d.four;
        let threeNew = (_f = (_e = product === null || product === void 0 ? void 0 : product.productRating) === null || _e === void 0 ? void 0 : _e.voteCount) === null || _f === void 0 ? void 0 : _f.three;
        let twoNew = (_h = (_g = product === null || product === void 0 ? void 0 : product.productRating) === null || _g === void 0 ? void 0 : _g.voteCount) === null || _h === void 0 ? void 0 : _h.two;
        let oneNew = (_k = (_j = product === null || product === void 0 ? void 0 : product.productRating) === null || _j === void 0 ? void 0 : _j.voteCount) === null || _k === void 0 ? void 0 : _k.one;
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
            case 1:
                oneNew++;
                break;
        }
        const totalRating = (fiveNew * 5 + fourNew * 4 + threeNew * 3 + twoNew * 2 + oneNew * 1) /
            (fiveNew + fourNew + threeNew + twoNew + oneNew);
        const productRating = {
            rating: Math.round(totalRating * 100) / 100,
            voteCount: {
                five: fiveNew,
                four: fourNew,
                three: threeNew,
                two: twoNew,
                one: oneNew,
            },
        };
        updatedProduct = yield product_1.default.findOneAndUpdate({ _id: productID }, {
            $push: { comments: { $each: [newComment], $position: 0 } },
            $set: { productRating: productRating },
        }, { new: true, runValidators: true });
        if (!updatedProduct)
            return res
                .status(http_status_codes_1.StatusCodes.NOT_FOUND)
                .json({ error: 'Product not found' });
        if (updatedProduct.comments.length > 6) {
            const leastRecentComment = updatedProduct
                .comments[6];
            updatedProduct = yield product_1.default.findByIdAndUpdate({ _id: productID }, {
                $pull: {
                    comments: updatedProduct.comments[6],
                },
            }, { new: true, runValidators: true });
            const comment = yield comment_1.default.create({
                userID: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.userID,
                rating: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.rating,
                description: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.description,
                title: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.title,
                createdAt: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.createdAt,
                username: leastRecentComment === null || leastRecentComment === void 0 ? void 0 : leastRecentComment.username,
                productID,
            });
            return res.status(http_status_codes_1.StatusCodes.CREATED).json({ comment });
        }
    }
    else if (newComment && role !== authentication_1.Role.Consumer) {
        throw new unauthorized_1.default('You cannot add comments as a Farmer');
    }
    if (!updatedProduct) {
        return res
            .status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ error: 'Product not found' });
    }
    res.json({ product: updatedProduct });
});
exports.updateProduct = updateProduct;
// What abt the consumers who have added it to cart??
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productID } = req.params;
    const { userID } = req.user;
    const product = yield product_1.default.findOneAndDelete({
        _id: productID,
        farmerID: userID,
    });
    if (!product) {
        throw new not_found_1.default('Product not found');
    }
    res.status(http_status_codes_1.StatusCodes.GONE).json({ product });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map