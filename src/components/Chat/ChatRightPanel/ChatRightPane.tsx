import './ChatRightPanel.css'
import React from "react";
import {CloseOutlined} from "@ant-design/icons/lib";
import {useDispatch} from "react-redux";
import {RightChatPanel} from "../../../redux/action";



export const ChatRightPanel = () => {

    const dispatch = useDispatch()

    return (
        <div className={'right--panel'}>
            <div className={'panel_header'}>
                <div className={'panel-header_top-container'}>
                    <p className={'panel--header_title'}>User info</p>
                    <CloseOutlined className={'panel--header_out--button'} onClick={() => dispatch(RightChatPanel())} />
                </div>
                <div>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}