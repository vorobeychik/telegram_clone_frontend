import {IChannel} from "./IChannel";

export interface IUser {
    name:string,
    userChannels:IChannel[]
    email:string,
    code:number,
    tag:string,
    mobile:string,
    isOnline:boolean,
    id:number,
}