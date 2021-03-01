import React, {useEffect, useState} from 'react'
import {Chat} from "../../components/Chat/Chat";
import {Menu} from "../../components/Menu/Menu"
import './Main.css'
import {useDispatch, useSelector, useStore} from "react-redux";
import {changeUserData} from "../../redux/action";
import {IUser} from "../../interfaces/IUser";
import io from 'socket.io-client';
import axios from "axios";
import {IStore} from "../../interfaces/IStore";

export const Main = () => {


    const socket = io("http://localhost:3001", );
    const { dispatch, getState } = useStore();



    useEffect(() => {

        async function getUser(){

            const {email} = getState().user

            console.log(email)
            const res = await axios.get(`http://localhost:3001/api/login?email=${email}`)
            console.log(res.data.user)

            dispatch(changeUserData(res.data.user))
        }

        getUser()
    },[getState])




    dispatch(changeUserData({userChannels:[]}))
    socket.emit('chat message', 'hiiiii');




    //
    // let [userData,setUserData] = useState<IUser>(
        // {
        //     name:'Hate',
        //     id:1,
        //     userChannels:[
        //             {
        //                 userName:'@Nexta',
        //                 mobile:'+375 29 133 2289',
        //                 name:'Nexta',
        //                 lastMsg:'Появилось новое видео задержания',
        //                 newMsg:4,
        //                 lastMsgTime:'12:09',
        //                 isOnline:false,
        //                 lastTimeOnline:'15:07',
        //                 messages:[
        //                     {
        //                         ownerId:3,
        //                         value:'Появилось новое видео задержания',
        //                         time:'21:09'
        //                     }
        //                 ],
        //                 id:1,
        //             },
        //         {
        //             name:'Паша(НП)',
        //             lastMsg:'Ты лох',
        //             newMsg:1,
        //             lastMsgTime:'12:09',
        //             isOnline:true,
        //             lastTimeOnline:'15:08',
        //             userName:'@zinkovaya_maz',
        //             mobile:'+375 44 793 8075',
        //             messages:[
        //                 {
        //                     ownerId:2,
        //                     value:'Ты лох',
        //                     time:'13:01'
        //                 },
        //                 {
        //                     ownerId:1,
        //                     value: 'Нет ты',
        //                     time:'13:02'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },
        //                 {
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 },{
        //                     ownerId:2,
        //                     value: 'Ладно да я',
        //                     time:'13:03'
        //                 }
        //             ],
        //             id:2,
        //
        //         },
        //     ]
        // })

    // dispatch(changeUserData(userData))

    return (
        <div className={'container'}>
            <Menu/>
            <Chat/>
        </div>
    )
}