import React, {useState} from 'react';
import './Menu.css'
import {MenuHeader} from "./MenuHeader/MenuHeader";
import {MenuChannels} from "./MenuChannels/MenuChannels";
import {IChannel} from "../../interfaces/IChannel";
import {useSelector} from "react-redux";
import {IStore} from "../../interfaces/IStore";
import {MenuSearch} from "./MenuSearch/MenuSearch";

export const  Menu = () =>{

    const isSearchPanelOpen = useSelector((state:IStore) => state.searchPanel);

    return (
        <div className='menu'>
            <MenuHeader/>
            {isSearchPanelOpen ? <MenuSearch/> : <MenuChannels/>}
        </div>
    )
}