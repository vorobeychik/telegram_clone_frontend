import React,{useState} from 'react'
import './MenuChannel.css'
import {Channel} from "./Channel/Channel";
import {IChannel} from "../../../interfaces/IChannel";
import {useSelector} from "react-redux";
import {IStore} from "../../../interfaces/IStore";


export const MenuChannels = () => {


    const channels = useSelector((state:IStore) => state.user.userChannels).map(channelInfo => <Channel key={Date.now()} chanelInfo={channelInfo}/>);




    return (
        <div className={'menu_channels'}>
            {channels}
        </div>
    )

};
