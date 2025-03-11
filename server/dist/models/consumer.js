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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = require("mongoose");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ConsumerSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        immutable: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide valid email',
        ],
        unique: true,
        immutable: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
        maxlength: 12,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    locationCoordinates: {
        latitude: {
            coordinate: {
                type: Number,
                required: true,
            },
            direction: {
                type: String,
                enum: ['N', 'S'],
                required: true,
            },
        },
        longitude: {
            coordinate: {
                type: Number,
                required: true,
            },
            direction: {
                type: String,
                enum: ['E', 'W'],
                required: true,
            },
        },
    },
    following: [
        {
            farmerID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Farmer' },
            name: { type: String },
        },
    ],
    cart: [
        {
            farmerID: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Farmer',
            },
            farmerName: {
                type: String,
            },
            totalPrice: {
                type: Number,
            },
            products: [
                {
                    productID: {
                        type: mongoose_1.Schema.Types.ObjectId,
                        ref: 'Product',
                    },
                    quantity: {
                        type: Number,
                    },
                },
            ],
        },
    ],
});
ConsumerSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcryptjs_1.default.genSalt(10);
        this.password = yield bcryptjs_1.default.hash(this.password, salt);
    });
});
ConsumerSchema.methods.getConsumerDetails = function () {
    return {
        name: this.name,
        image: this.image,
        mobileNo: this.mobileNo,
        location: this.location,
        locationCoordinates: this.locationCoordinates,
    };
};
ConsumerSchema.methods.createJWT = function () {
    return jsonwebtoken_1.default.sign({
        consumerID: this._id,
        image: this.image,
        name: this.name,
        mobileNo: this.mobileNo,
        location: this.location,
        locationCoordinates: this.locationCoordinates,
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
};
ConsumerSchema.methods.comparePasswords = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isMatch = yield bcryptjs_1.default.compare(candidatePassword, this.password);
        return isMatch;
    });
};
exports.default = (0, mongoose_1.model)('Consumer', ConsumerSchema);
//# sourceMappingURL=consumer.js.map