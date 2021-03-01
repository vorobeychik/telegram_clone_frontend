import React from 'react'
import './Channel.css'
import {IChannel} from "../../../../interfaces/IChannel";
import {changeChannel} from "../../../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../../../interfaces/IStore";


interface IChannelProps {
    chanelInfo:IChannel
}

export const Channel = ({chanelInfo}:IChannelProps) => {

    const selectedChannelId = useSelector((state:IStore) => state.selectedChannel.id )

    const dispatch = useDispatch();

    const channelStyles =  selectedChannelId === chanelInfo.id ? {
        channel:'channel_selected',
        channel_name:'channel_name_selected',
        channel_lastMsg:'channel_lastMsg_selected',
        channel_last_message_time:'channel-last_message_time_selected',
        channel_new__messages:'channel-new--messages_selected'

    }:{
        channel:'channel',
        channel_name:'channel_name',
        channel_lastMsg:'channel_lastMsg',
        channel_last_message_time:'channel-last_message_time',
        channel_new__messages:'channel-new--messages'

    }

    return (
        <div className={channelStyles.channel} onClick={() => dispatch(changeChannel(chanelInfo))}>
            <div className={'channel_icon-container'}>
                <div className={'channel-icon'}></div>
            </div>
            <div className={'channel_text-container'}>
                    <p className={channelStyles.channel_name}>{chanelInfo.name}</p>
                    <p className={channelStyles.channel_lastMsg}>{chanelInfo.lastMsg}</p>
            </div>
            <div className={'channel_info-container'}>
                    <p className={channelStyles.channel_last_message_time}>{chanelInfo.lastMsgTime}</p>
                    <p className={channelStyles.channel_new__messages}>{chanelInfo.newMsg}</p>
            </div>
        </div>
    )

};