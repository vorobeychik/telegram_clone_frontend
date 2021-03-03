import React from 'react'
import './MenuSearch.css'
import {useSelector} from "react-redux";
import {IStore} from "../../../interfaces/IStore";
import {MenuSearchUser} from "./MenuSearchUser/MenuSearchUser";
import {IUser} from "../../../interfaces/IUser";

export const MenuSearch = () => {

    let searchedUsers = useSelector((state:IStore) => state.searchedUser).map((el:IUser) =>  <MenuSearchUser name={el.name} tag={el.tag}/> )

    return (
        <div className={'menu_search'}>
            <div className={'search-menu_title--container'}>
                <p className={'search-menu_title'}>Global search results</p>
            </div>
            <div>
                {searchedUsers}
            </div>
        </div>
    )
}