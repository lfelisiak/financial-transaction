import {Request,Response} from "express";
import NodeCache from "node-cache";
import { FinancialAccount } from "../entities/FinancialAccount";
import { Lock } from "../entities/Lock";
import { FinancialAccountTransaction } from "../entities/FinancialAccountTransaction";

let cache:NodeCache = new NodeCache();
let transactionLock:Lock = new Lock();

export class FinancialAccountController{

    private financialAccountHistory:Array<FinancialAccountTransaction>;
    private financialAccount: FinancialAccount;
    
    constructor(){
        this.financialAccountHistory = cache.get("financialAccountHistory") || [];
        this.financialAccount =  cache.get("financialAccount") || new FinancialAccount(1,0);
    }

    async index(request: Request, response: Response) {
        try{
            //for limit offset pagination
            let options:Object;
            options = {
                ...(request.query.take ?  {take: request.query.take} : {}),
                ...(request.query.skip ?  {skip: request.query.skip} : {}),
            };
            const result = {code:200,status:true,data:{financialAccountHistory:this.financialAccountHistory,financialAccount:this.financialAccount}};
            return result;
        }catch(error){
            console.log(error);
            return {code:error.code || null,message:error.message || null};
        }
    }

    async get(request: Request, response: Response) {
        try{
            const transaction = this.financialAccountHistory.find(transaction => transaction.id === parseInt(request.params.id))
            const result = {code:200,status:true,data:{financialTransaction:transaction}};
            return result;
        }catch(error){
            console.log(error);
            return {code:error.code || 500,status:false,message:error.message || null};
        }
    }

     async save(request: Request, response: Response) {
        try{
            let result:Object;
            const type = request.body.type;
            const amount = parseInt(request.body.amount);
            if(!amount){
                throw new Error("Amount is required and must be a numeric value.");
            }
            if(transactionLock.lock()){
                const transaction = await this.financialAccount.performTransaction(amount,type);
                if(transaction)
                    this.financialAccountHistory.push((new FinancialAccountTransaction(this.financialAccountHistory.length + 1,amount, type)));
                cache.set("financialAccountHistory",this.financialAccountHistory);
                cache.set("financialAccount",this.financialAccount);               
                transactionLock.unlock();
            }
            result = {code:200,status:true,data:{financialAccountHistory:this.financialAccountHistory,financialAccount:this.financialAccount}}
            return result;
        }catch(error){
            console.log(error);
            return {code:error.code || 500,status:false,message:error.message || null};
        }
    }
}