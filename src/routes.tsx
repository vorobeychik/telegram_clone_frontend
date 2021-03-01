import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {Login} from "./pages/Login/Login";
import {Main} from "./pages/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "./interfaces/IStore";
import {changeAuthorization, changeUserEmail} from "./redux/action";

export const Routes = () => {

    const dispath = useDispatch()

    const email = localStorage.getItem('email');

    if(email){
        dispath(changeAuthorization(true))
        dispath(changeUserEmail(email))
    }


    let isAuth = useSelector((state:IStore) => state.authorized )
    if(isAuth){
        return (
            <Switch>
                <Route path={'/telegram'}>
                    <Main/>
                </Route>
                <Redirect to={'/telegram'} />

            </Switch>
        )
    }else{
        return (
            <Switch>
                <Route path={'/'} exact>
                    <Login/>
                </Route>
                <Redirect to={'/'} />
            </Switch>
        )
    }
};