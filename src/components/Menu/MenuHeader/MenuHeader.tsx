import React, {useState} from "react";
import './MenuHeader.css'
import {useDispatch} from "react-redux";
import {changeSearchedUser, openSearchPanel} from "../../../redux/action";
import axios from "axios";

export const MenuHeader = () => {

    const dispatch = useDispatch();
    let [inputState,setInputState] = useState('');

    async function inputHandler(event:any) {
        let value = event.target.value;

        setInputState(value);
        console.log(value.length)
        if(!!value.length){
            let res = await axios.get(`http://localhost:3001/api/login?tag=${value}`);
            console.log(res.data.user)
            if(res.data.user){
                dispatch(changeSearchedUser(res.data.user));
            }else{
                dispatch(changeSearchedUser(false))
            }
            dispatch(openSearchPanel(true))
        }else{
            dispatch(openSearchPanel(false))
        }
    }

    return (
        <div className='menu-header'>
            <div className='menu-button'>
               <div className='menu-button-element'></div>
               <div className='menu-button-element'></div>
               <div className='menu-button-element'></div>
            </div>
            <input className={'menu-input'} placeholder='Search' onChange={inputHandler} value={inputState}/>
        </div>
    )
}