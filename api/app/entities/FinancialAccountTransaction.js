"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var FinancialAccountTransaction = /** @class */ (function () {
    function FinancialAccountTransaction(id, amount, type) {
        this.id = id;
        this.amount = amount;
        this.type = type;
        this.effectiveDate = moment_1.default().format("YYYY-MM-DD HH:mm:ss");
    }
    return FinancialAccountTransaction;
}());
exports.FinancialAccountTransaction = FinancialAccountTransaction;
