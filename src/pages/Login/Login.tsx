import React, {useState} from "react";
import './Login.css'
import {EmailEnter} from "../../components/Auth/EmailEnter/EmailEnter";
import {CodeEnter} from "../../components/Auth/CodeEnter/CodeEnter";
import {Registration} from "../../components/Auth/Registration/Registration";

export const Login = () => {

    const [windows,setWindows] = useState({emailEnter:true,codeEnter:false,register:false});
    const [shouldRegister,setShouldRegister] = useState(false)

    return (
        <React.Fragment>
            {windows.emailEnter ? <EmailEnter setWindows={setWindows} setShouldRegister={setShouldRegister}/> : ''}
            {windows.codeEnter ? <CodeEnter shouldRegister={shouldRegister} setWindows={setWindows}/> : ''}
            {windows.register ? <Registration /> : ''}
        </React.Fragment>
    )
}