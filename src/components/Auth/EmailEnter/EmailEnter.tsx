import React, {useState} from "react";
import './EmailEnter.css'
import axios from "axios";
import {changeUserData, changeUserEmail} from "../../../redux/action";
import {useDispatch} from "react-redux";

type Props = {
    setWindows:Function,
    setShouldRegister: Function,
}

export const EmailEnter = ({setWindows,setShouldRegister}:Props) => {

    const dispatch = useDispatch()

    let [inputsState,setInputsState] = useState('');


    function changeEmailHandler(event:any) {
        setInputsState(event.target.value)
    }

    async function buttonHandler() {
        let res = await axios.post('http://localhost:3001/api/login',{email:inputsState})
        console.log(res.data);

        setShouldRegister(res.data.shouldRegister);
        dispatch(changeUserEmail(res.data.userDate.email));

        if( !res.data.shouldRegister ){ localStorage.setItem('email',res.data.userDate.email) }
    setWindows((prev:any) => ({...prev,codeEnter:true,emailEnter:false}))
}

    return (
        <div className={'login_page'}>
            <div className={'login_container'}>
                <p className={'login_title'}>Your Phone and Email</p>
                <p className={'login_paragraph'}>Please enter your mobile phone and email</p>
                <input type="text"
                       className={'login_email-input'}
                       placeholder={'Enter your email'}
                       name={'emailInput'}
                       onChange={changeEmailHandler}
                       value={inputsState}
                />

                <button className={'login_button'} onClick={buttonHandler}>
                    NEXT
                </button>

            </div>

        </div>
    )
}