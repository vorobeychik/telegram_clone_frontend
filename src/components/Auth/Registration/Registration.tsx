import React, {useState} from 'react'
import './Registration.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../../interfaces/IStore";
import {changeAuthorization} from "../../../redux/action";

export const Registration = () => {

    const dispatch = useDispatch()
    const email = useSelector((state:IStore) => state.user.email)

    let [inputsState,setInputsState] = useState({
        numberCountryCode:'+375',
        tegInput:'',
        nameInput:'',
        numberInput:'',
    });

    function changeInputHandler(event:any) {
        console.log(inputsState)
        if(event.target.name ===  'numberInput' && (/^\d+$/.test(event.target.value) || event.target.value === '') && event.target.value.length <= 9) {
            setInputsState({...inputsState, [event.target.name]: event.target.value})
        }else if(event.target.name !==  'numberInput'){
            setInputsState({...inputsState, [event.target.name]: event.target.value})
        }

    }

    async function buttonHandler() {
        let res = await axios.put('http://localhost:3001/api/login',{
            name:inputsState.nameInput,
            tag:inputsState.tegInput,
            number: inputsState.numberCountryCode + inputsState.numberInput,
            email
        });


        dispatch(changeAuthorization(true));
        localStorage.setItem('email',email)

        console.log(res)
    }

    return (
        <div className={'register_page'}>
            <div className={'register_container'}>
                <p className={'registration_title'}>Registration</p>
                <p className={'registration_paragraph'}>Please enter some data about you</p>
                <input
                    className={'register_name-input'}
                    value={inputsState.nameInput}
                    name={'nameInput'}
                    onChange={changeInputHandler}
                    placeholder={'Enter your name'}
                />
                <input
                    className={'register_teg-input'}
                    value={inputsState.tegInput}
                    name={'tegInput'}
                    onChange={changeInputHandler}
                    placeholder={'Enter your tag'}
                />
                <div className={'registration_number_container'}>
                    <input value={'+375'} className={'registration_number-input_left'}/>
                    <input type="text"
                           className={'registration_number-input_right'}
                           name={'numberInput'}
                           onChange={changeInputHandler}
                           value={inputsState.numberInput}
                           placeholder={'Enter your number'}
                    />
                </div>
                <button className={'registration_button'} onClick={buttonHandler}> Next</button>
            </div>
        </div>
    )
}