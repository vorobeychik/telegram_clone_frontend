import React, {useState} from 'react'
import './ChatFooter.css'
import {PaperClipOutlined,SmileOutlined,AudioOutlined,SendOutlined } from '@ant-design/icons'


export const ChatFooter = () => {

    let [inputState,setInputState] = useState('');

    const sendButton = !inputState.length ? <AudioOutlined  className={'chat--footer_send--button'}/> :  <SendOutlined className={'chat--footer_send--button'}/>

    return (
        <div className={'chat--footer'}>
            <PaperClipOutlined className={'chat--footer_file--button'} />
            <input className={'chat--footer_input'} placeholder={'Write a message...'} onChange={input => setInputState(input.target.value)}/>
            <SmileOutlined className={'chat--footer_smile--button'} />
            {sendButton}

        </div>
    )
}