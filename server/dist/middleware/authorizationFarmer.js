"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const authentication_1 = require("./authentication");
const authorizeFarmer = (req, res, next) => {
    if (req.user.role === authentication_1.Role.Farmer) {
        next();
    }
    else {
        throw new errors_1.UnauthenticatedError('Access Forbidden for Consumers');
    }
};
exports.default = authorizeFarmer;
//# sourceMappingURL=authorizationFarmer.js.map