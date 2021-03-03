import React from "react";
import './MenuSearchUser.css'

type Props = {
    name:string,
    tag:string,
}

export const MenuSearchUser = ({name,tag}:Props) => {
    let a
    return (
        <div className={'menu--search_user'}>
            <div className={'user--search_icon--container'}>
                <div className={'user--search_icon'}>
            </div>
            </div>
            <div className={'user--search_container'}>
                <p className={'user--search_name'}>{name}</p>
                <p className={'user--search_tag'}>{tag}</p>
            </div>
        </div>
    )
}