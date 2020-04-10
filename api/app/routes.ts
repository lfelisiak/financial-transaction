import { FinancialAccountController } from "./controllers/FinancialAccountController";

export const Routes:any = [
{
    method: "get",
    prefix: "/api/v1",
    route: "/financial_account",
    controller: FinancialAccountController,
    action: "index",
},
{
    method: "get",
    prefix: "/api/v1",
    route: "/financial_account/:id",
    controller: FinancialAccountController,
    action: "get",
},
{
    method: "post",
    prefix: "/api/v1",
    route: "/financial_account",
    controller: FinancialAccountController,
    action: "save",
},
{
    method: "delete",
    prefix: "/api/v1",
    route: "/financial_account/:id",
    controller: FinancialAccountController,
    action: "delete",
}
];