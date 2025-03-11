"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedDateWithoutYear = getFormattedDateWithoutYear;
const moment_1 = __importDefault(require("moment"));
function getFormattedDateWithoutYear(date) {
    const formattedDate = (0, moment_1.default)(date).format('MMM D');
    return formattedDate;
}
//# sourceMappingURL=getFormattedDate.js.map