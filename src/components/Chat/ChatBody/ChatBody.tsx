import  './ChatBody.css'
import '../../../interfaces/IMessage'
import {IMessage} from "../../../interfaces/IMessage";
import {ChatMessage} from "./ChatMessage/ChatMessage";
import {useSelector} from "react-redux";
import {IStore} from "../../../interfaces/IStore";
import React from "react";

type Props = {
    messages:IMessage[]
}

export const ChatBody:React.FC<Props> = ({messages}) => {

    const user = useSelector((state:IStore) =>  ({
        name:state.user.name,
        id:state.user.id,
    }) )

    const chatMessages =  messages.map((msgInfo:IMessage) => <ChatMessage msgInfo={msgInfo} userInfo={user}/> )




    return (
        <div className={'chat--body'}>
            {chatMessages}
        </div>
    )
}