import {IChannel} from "./IChannel";

export interface IUser {
    name:string,
    id:number,
    userChannels:IChannel[]
    email:string,
    code:number,
}