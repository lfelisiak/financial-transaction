export interface ILock{
    locked:boolean,
    isLocked():Boolean,
    lock():Boolean,
    unlock():void,
}