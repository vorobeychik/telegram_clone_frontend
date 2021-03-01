import React, {useState} from 'react';
import './Menu.css'
import {MenuHeader} from "./MenuHeader/MenuHeader";
import {MenuChannels} from "./MenuChannels/MenuChannels";
import {IChannel} from "../../interfaces/IChannel";

export const  Menu = () =>{

    return (
        <div className='menu'>
            <MenuHeader/>
            <MenuChannels/>
        </div>
    )
}