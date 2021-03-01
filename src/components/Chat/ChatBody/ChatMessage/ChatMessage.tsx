import React from 'react'
import './ChatMessage.css'
import {IMessage} from "../../../../interfaces/IMessage";

type Props = {
    msgInfo:IMessage,
    userInfo:{
        name:string,
        id:number,
    }
}

export const ChatMessage = ({msgInfo,userInfo}:Props) => {

    console.log(msgInfo)

    const messageStyles = userInfo.id === msgInfo.ownerId ? {
        message_wrapper:'message_wrapper',
        message:'message'
    }:{
        message_wrapper:'companion-message_wrapper',
        message:'companion-message'
    }


    return (
        <div className={messageStyles.message_wrapper}>
            <div className={messageStyles.message}>
                <div className={'message_container'}>
                    <p className={'message_value'}>{msgInfo.value}</p>
                </div>
                <div className={'message--data_container'}>
                    <p className={'message_time'}>{msgInfo.time}</p>
                </div>

            </div>

        </div>

    )
}