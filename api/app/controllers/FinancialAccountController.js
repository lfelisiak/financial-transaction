"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_cache_1 = __importDefault(require("node-cache"));
var FinancialAccount_1 = require("../entities/FinancialAccount");
var FinancialAccountTransaction_1 = require("../entities/FinancialAccountTransaction");
var cache = new node_cache_1.default();
var FinancialAccountController = /** @class */ (function () {
    function FinancialAccountController() {
        this.financialAccountHistory = cache.get("financialAccountHistory") || [];
        this.financialAccount = cache.get("financialAccount") || new FinancialAccount_1.FinancialAccount(1, 0);
    }
    FinancialAccountController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result;
            return __generator(this, function (_a) {
                try {
                    options = void 0;
                    options = __assign(__assign({}, (request.query.take ? { take: request.query.take } : {})), (request.query.skip ? { skip: request.query.skip } : {}));
                    result = { code: 200, status: true, data: { financialAccountHistory: this.financialAccountHistory, financialAccount: this.financialAccount } };
                    return [2 /*return*/, result];
                }
                catch (error) {
                    console.log(error);
                    return [2 /*return*/, { code: error.code || null, message: error.message || null }];
                }
                return [2 /*return*/];
            });
        });
    };
    FinancialAccountController.prototype.get = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction, result;
            return __generator(this, function (_a) {
                try {
                    transaction = this.financialAccountHistory.find(function (transaction) { return transaction.id === parseInt(request.params.id); });
                    result = { code: 200, status: true, data: { financialTransaction: transaction } };
                    return [2 /*return*/, result];
                }
                catch (error) {
                    console.log(error);
                    return [2 /*return*/, { code: error.code || 500, status: false, message: error.message || null }];
                }
                return [2 /*return*/];
            });
        });
    };
    FinancialAccountController.prototype.save = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var result, type, amount, transaction, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        result = void 0;
                        type = request.body.type;
                        amount = parseInt(request.body.amount);
                        if (!amount) {
                            throw new Error("Amount is required and must be a numeric value.");
                        }
                        return [4 /*yield*/, this.financialAccount.performTransaction(amount, type)];
                    case 1:
                        transaction = _a.sent();
                        if (transaction)
                            this.financialAccountHistory.push((new FinancialAccountTransaction_1.FinancialAccountTransaction(this.financialAccountHistory.length + 1, amount, type)));
                        cache.set("financialAccountHistory", this.financialAccountHistory);
                        cache.set("financialAccount", this.financialAccount);
                        result = { code: 200, status: true, data: { financialAccountHistory: this.financialAccountHistory, financialAccount: this.financialAccount } };
                        return [2 /*return*/, result];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, { code: error_1.code || 500, status: false, message: error_1.message || null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FinancialAccountController;
}());
exports.FinancialAccountController = FinancialAccountController;
