import { ILock } from "../interfaces/ILock";

export class Lock implements ILock{
    
    locked:boolean;
    
    constructor(){
        this.locked = false;
    }

    isLocked():boolean{
        return this.locked;
    }

    lock():boolean{
        try{
            if(!this.isLocked()){
                this.locked = true;
            }else{
                throw new Error("We were unable to process that operation at the current time")
            }
            return true;
        }catch(error){
            console.error(error);
            return false;
        }
    }
    unlock():void{
        this.locked = false;
    }
}