"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const authentication_1 = require("./authentication");
const authorizeConsumer = (req, res, next) => {
    if (req.user.role === authentication_1.Role.Consumer) {
        next();
    }
    else {
        throw new errors_1.UnauthenticatedError('Access Forbidden for Farmers');
    }
};
exports.default = authorizeConsumer;
//# sourceMappingURL=authorizationConsumer.js.map