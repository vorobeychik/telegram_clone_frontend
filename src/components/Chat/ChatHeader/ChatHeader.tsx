import './ChatHeader.css'
import React from 'react'
import {useDispatch} from "react-redux";
import {RightChatPanel} from "../../../redux/action";

type Props = {
    chatName:string,
    isOnline:boolean,
    lastTimeOnline:string,
}

export const ChatHeader = ({chatName,isOnline,lastTimeOnline}:Props) => {

    const dispatch = useDispatch();

    return (
        <div className='chat--header'>
            <div className={'chat--header_left--block'}>
                <p className={'chat--header_name'}>{chatName}</p>
                {isOnline ? <p className={'chat--header_is--online'}>online</p> : <p className={'chat--header_is--offline'}>last seen {lastTimeOnline}</p>}
            </div>
            <div className={'chat--header_right--block'}>
                <div className={'chat--header_channel--info'} onClick={() => dispatch(RightChatPanel())}>
                    <hr className={'chat--header_channel--info--item'}>

                    </hr>
                </div>
                <div className={'chat--header_channel--edit'}>
                    <div className={'chat--header_channel--edit--item'}></div>
                    <div className={'chat--header_channel--edit--item'}></div>
                    <div className={'chat--header_channel--edit--item'}></div>
                </div>
            </div>
        </div>
    )
}