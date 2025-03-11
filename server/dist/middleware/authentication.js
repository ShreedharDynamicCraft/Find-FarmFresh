"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../errors");
var Role;
(function (Role) {
    Role["Farmer"] = "Farmer";
    Role["Consumer"] = "Consumer";
})(Role || (exports.Role = Role = {}));
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new errors_1.UnauthenticatedError('Authentication invalid');
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (typeof payload === 'object') {
            const userID = payload.farmerID !== undefined ? payload.farmerID : payload.consumerID;
            const role = payload.farmerID !== undefined ? Role.Farmer : Role.Consumer;
            req.user = {
                userID,
                name: payload.name,
                role,
            };
        }
        next();
    }
    catch (error) {
        throw new errors_1.UnauthenticatedError('Authentication Invalid');
    }
};
exports.default = auth;
//# sourceMappingURL=authentication.js.map