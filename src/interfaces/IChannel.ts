import {IMessage} from "./IMessage";

export interface IChannel{
    name:string,
    lastMsg:string,
    newMsg:number,
    lastMsgTime:string;
    isOnline:boolean;
    lastTimeOnline:string;
    messages:IMessage[];
    id:number;
    userName:string,
    mobile:string,
}