"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FinancialAccountController_1 = require("./controllers/FinancialAccountController");
exports.Routes = [
    {
        method: "get",
        prefix: "/api/v1",
        route: "/financial_account",
        controller: FinancialAccountController_1.FinancialAccountController,
        action: "index",
    },
    {
        method: "get",
        prefix: "/api/v1",
        route: "/financial_account/:id",
        controller: FinancialAccountController_1.FinancialAccountController,
        action: "get",
    },
    {
        method: "post",
        prefix: "/api/v1",
        route: "/financial_account",
        controller: FinancialAccountController_1.FinancialAccountController,
        action: "save",
    },
    {
        method: "delete",
        prefix: "/api/v1",
        route: "/financial_account/:id",
        controller: FinancialAccountController_1.FinancialAccountController,
        action: "delete",
    }
];
