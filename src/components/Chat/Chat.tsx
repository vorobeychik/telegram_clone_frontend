import React from 'react'
import './Chat.css'
import {useSelector} from 'react-redux'
import {IStore} from "../../interfaces/IStore";
import {ChatFooter} from "./ChatFooter/ChatFooter";
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatBody} from "./ChatBody/ChatBody";
import {ChatRightPanel} from "./ChatRightPanel/ChatRightPane";


export const Chat = () => {

    const channel =  useSelector((state:IStore) => (state.selectedChannel))
    const isPanelOpen = useSelector((state:IStore) => state.rightChatPanel)

    console.log(channel)

    if(!channel.id){
        return (
            <div className='chat chat_not--selected'>
                <p className={'chat_paragraph'}>Select a chat to start messaging</p>
            </div>
        )
    }else{
        return (
            <div className='chat_container'>
                <div className={'chat chat--selected'}>
                    <ChatHeader chatName={channel.name} isOnline={channel.isOnline} lastTimeOnline={channel.lastTimeOnline}/>
                    <ChatBody messages={channel.messages}/>
                    <ChatFooter/>
                </div>
                {isPanelOpen ? <ChatRightPanel /> : ''}
            </div>
        )
    }


}