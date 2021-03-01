import {IChannel} from "./IChannel";
import {IUser} from "./IUser";

export interface IStore {
    selectedChannel:IChannel,
    user:IUser,
    rightChatPanel:boolean,
    authorized: boolean,
}