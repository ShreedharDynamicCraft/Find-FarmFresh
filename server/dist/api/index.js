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
require("dotenv/config");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import helmet from 'helmet'
// import { rateLimit as rateLimiter } from 'express-rate-limit'
const connect_1 = __importDefault(require("../db/connect"));
const auth_1 = __importDefault(require("../routes/auth"));
const farmers_1 = __importDefault(require("../routes/farmers"));
const products_1 = __importDefault(require("../routes/products"));
const comments_1 = __importDefault(require("../routes/comments"));
const orders_1 = __importDefault(require("../routes/orders"));
const consumers_1 = __importDefault(require("../routes/consumers"));
const error_handler_1 = __importDefault(require("../middleware/error-handler"));
const not_found_1 = __importDefault(require("../middleware/not-found"));
const app = (0, express_1.default)();
// app.use(helmet())
// app.set('trust proxy', 1)
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000,
//     limit: 1000,
//     standardHeaders: 'draft-7',
//     legacyHeaders: false,
//   }),
// )
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use('/api/v1/auth', auth_1.default);
app.use('/api/v1/farmers', farmers_1.default);
app.use('/api/v1/products', products_1.default);
app.use('/api/v1/comments', comments_1.default);
app.use('/api/v1/consumers', consumers_1.default);
app.use('/api/v1/orders', orders_1.default);
app.get('/', (req, res) => {
    res.send('Find Fresh Farmer API');
});
// middleware
app.use(not_found_1.default);
app.use(error_handler_1.default);
const PORT = process.env.PORT || 5000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // connectDB
        yield (0, connect_1.default)(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
start();
exports.default = app;
//# sourceMappingURL=index.js.map