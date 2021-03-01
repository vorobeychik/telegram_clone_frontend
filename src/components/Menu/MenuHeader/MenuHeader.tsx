import React from "react";
import './MenuHeader.css'

export const MenuHeader = () => {
    return (
        <div className='menu-header'>
            <div className='menu-button'>
               <div className='menu-button-element'></div>
               <div className='menu-button-element'></div>
               <div className='menu-button-element'></div>
            </div>
            <input className={'menu-input'} placeholder='Search'/>
        </div>
    )
}