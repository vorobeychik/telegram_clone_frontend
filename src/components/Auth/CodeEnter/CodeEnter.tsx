import React, {useState} from "react";
import './CodeEnter.css'
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../../interfaces/IStore";
import {changeAuthorization} from "../../../redux/action";
import axios from "axios";

type Props = {
    shouldRegister:boolean,
    setWindows: Function,
}

export const CodeEnter = ({shouldRegister,setWindows}:Props) => {

    const dispatch = useDispatch()

    let [error,setError] = useState(false)
    let [codeInputState,setCodeInputState] = useState('')
    let {email} = useSelector((state:IStore) => ({code: state.user.code,email:state.user.email}));

    async function buttonHandler(){

        let isCodeTrue = await axios.post('http://localhost:3001/api/login/check-code',{email,code:codeInputState});

        console.log(isCodeTrue)

        if(!isCodeTrue ){
            setError(true)
        }else if(isCodeTrue && !shouldRegister){
            dispatch(changeAuthorization(true))
            console.log('Правильный код')
        }else{
            console.log('Правильный код но не авторизирован')
            setWindows((prev:any) => ({...prev,codeEnter:false,register:true}))
        }
    }

    return (
        <div className={'code_page'}>
            <div className={'code_container'}>
                <p className={'code_title'}> {email} </p>
                <p className={'code_paragraph'}>Please enter the code you've just received</p>
                <input  className={'code_input'} placeholder={'Enter your code'} value={codeInputState} onChange={ev => setCodeInputState(ev.target.value)}/>
                <button className={'code_button'} onClick={buttonHandler}>Next</button>
                {error ? <p>Invalid code</p> : ''}
            </div>
        </div>

    )
}